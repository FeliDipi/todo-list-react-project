import { useState } from "react";
import { addTodoDB, getTodoDB, removeTodoDB, updateTodoDB } from "../../db/client.js";
import { dateFormatter } from "../utils/dateFormatter.js";

export const useTodos = () =>
{
    const [todos, setTodos] = useState([]);
    const [originalTodos, setOriginalTodos] = useState([]);

    const getTodo = async () =>
    {
        const response = await getTodoDB();
        const newTodos = response.rows.reverse();

        setTodos(newTodos);   
        setOriginalTodos(newTodos);      
    }

    const addTodo = async ({title,description}) =>
    {
        const dateFormatted = dateFormatter(new Date());

        await addTodoDB({"title":title,"description":description,"date":dateFormatted});
        getTodo();
    }

    const updateTodo = async ({id,title,description,isCompleted}) =>
    {
        await updateTodoDB({"id":id,"title":title,"description":description,"isCompleted":isCompleted?1:0});
        getTodo();
    }

    const removeTodo = async ({id}) =>
    {
        await removeTodoDB({"id":id});
        getTodo();
    }

    const filterTodo = ({action, props}) =>
    {
        const todosSaved = originalTodos;

        switch(action)
        {
            case "check" :
                {
                    if(props == 0) setTodos(todosSaved);
                    else if(props == 1 ) setTodos(todosSaved.filter(({todo_isCompleted}) => todo_isCompleted==1));
                    else setTodos(todosSaved.filter(({todo_isCompleted}) => todo_isCompleted==0));
                }
                break;
            case "title":
                {
                    setTodos(todosSaved.filter(({todo_title}) => todo_title.includes(props)));
                }
                break;
            case "date":
                {
                    setTodos(todosSaved.filter(({todo_date})=>todo_date.includes(props)));
                }
                break;
        }
    }

    return {
        todos,
        getTodo,
        addTodo,
        updateTodo,
        removeTodo,
        filterTodo
    }
}