import { useState } from "react";
import TodoFilters from "./TodoFilters";

const TodoInput = ({addTodo, filterTodo}) =>
{
    const [info, setInfo] = useState({title:"",description:""});

    const handleTitle = (event) =>
    {
        const newInfo = structuredClone(info);
        newInfo.title = event.target.value;

        setInfo(newInfo);
    }

    const handleDescription = (event) =>
    {
        const newInfo = structuredClone(info);
        newInfo.description = event.target.value;

        setInfo(newInfo);
    }

    const handleToAdd = () =>
    {
        if(info.title.length === 0) return;

        addTodo(info);
    }

    return (
        <div className="todo-list-panel todo-list-inputs">
            <input onChange={handleTitle} className="todo-list-add-input" type="text" placeholder="task title..." value={info.title}/>
            <input onChange={handleDescription} className="todo-list-add-input" type="text" placeholder="task description..." value={info.description}/>
            <div className="todo-list-inputs-buttons-content">
                <button className="todo-list-add-button" onClick={handleToAdd}>+</button>
                <TodoFilters filterTodo={filterTodo}/>
            </div>
        </div>
    )
}

export default TodoInput;