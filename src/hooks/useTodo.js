import { useState } from "react";
import { todos as todosMock } from "../mock/todos.js";
import { dateFormatter } from "../utils/dateFormatter.js";

export const useTodos = () =>
{
    const [todos, setTodos] = useState(todosMock);

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
        newTodos.push(newTodoItem);

        setTodos(newTodos);
    }

    const removeTodoItem = (id) =>
    {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
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

            setTodos(newTodos);
        }
    }

    const generateUniqueId = () => {
        return Math.random().toString(36);
    }

    return {
        todos,
        addTodoItem, 
        removeTodoItem, 
        editTodoItem
    };
}