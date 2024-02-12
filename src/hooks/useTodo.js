import { useState } from "react";
import { todos as todosMock } from "../mock/todos.js";
import { dateFormatter } from "../utils/dateFormatter.js";

export const useTodos = () =>
{
    var todosInitial = todosMock;

    if(localStorage.getItem("todos"))
    {
        todosInitial = JSON.parse(localStorage.getItem("todos"));
    }
    else
    {
        localStorage.setItem("todos",JSON.stringify(todosInitial));
    }

    const [todos, setTodos] = useState(todosInitial);

    const addTodoItem = ({title, description}) =>
    {
        const dateFormatted = dateFormatter(new Date());
        const id = generateUniqueId();

        const newTodoItem = 
        {
            "id":id,
            "title":title,
            "description":description,
            "date":dateFormatted,
            "isCompleted":false
        }

        const newTodos = [...todos];
        newTodos.unshift(newTodoItem);

        saveTodos(newTodos);
    }

    const removeTodoItem = (id) =>
    {
        const newTodos = todos.filter(todo => todo.id !== id);
        saveTodos(newTodos);
    }

    const editTodoItem = (id, {title, description, isCompleted}) =>
    {
        const index = todos.findIndex(item => item.id === id);

        if(index!==-1)
        {
            const newTodos = [...todos];

            newTodos[index].title = title;
            newTodos[index].description = description;
            newTodos[index].isCompleted = isCompleted;

            saveTodos(newTodos);
        }
    }

    const filterTodoItem = ({action, props}) =>
    {
        const todosSaved = JSON.parse(localStorage.getItem("todos"));

        switch(action)
        {
            case "check" :
                {
                    if(props == 0) setTodos(todosSaved);
                    else if(props == 1 ) setTodos(todosSaved.filter(todo => todo.isCompleted));
                    else setTodos(todosSaved.filter(todo => !todo.isCompleted));
                }
                break;
            case "title":
                {
                    setTodos(todosSaved.filter(todo => todo.title.includes(props)))
                }
                break;
            case "date":
                {
                    setTodos(todosSaved.filter(todo => todo.date.includes(props)))
                }
                break;
        }
    }

    const generateUniqueId = () => {
        return Math.random().toString(36);
    }

    const saveTodos = (todos) =>
    {
        setTodos(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
    }

    return {
        todos,
        addTodoItem, 
        removeTodoItem, 
        editTodoItem,
        filterTodoItem
    };
}