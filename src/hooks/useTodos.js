import { useState } from "react";
import { addTodoDB, getTodoDB, removeTodoDB, updateTodoDB } from "../../db/client.js";
import { FILTER_TYPE } from "../utils/filterType.js";

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
        await addTodoDB({"title":title,"description":description,"date":new Date()});
        getTodo();
    }

    const updateTodo = async ({id,title,description,isCompleted}) =>
    {
        await updateTodoDB({"id":id,"title":title,"description":description,"isCompleted":isCompleted});
        getTodo();
    }

    const removeTodo = async ({id}) =>
    {
        await removeTodoDB({"id":id});
        getTodo();
    }

    const filterTodo = ({filter, props}) =>
    {
        const todosSaved = originalTodos;

        switch(filter)
        {
            case FILTER_TYPE.CHECK:
                {
                    if(props == 0) 
                    {
                        setTodos(todosSaved);
                        return;
                    }

                    setTodos(todosSaved.filter(({todo_isCompleted}) => props==1?todo_isCompleted:!todo_isCompleted));
                }
                break;
            case FILTER_TYPE.TITLE:
                {
                    setTodos(todosSaved.filter(({todo_title}) => todo_title.includes(props)));
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