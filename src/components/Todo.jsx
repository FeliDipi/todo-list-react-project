import { useState } from "react";
import "../styles/Todo.css";
import { dateFormatter } from "../utils/dateFormatter.js";

const Todo = ({onEdit, onDelete, id, title, description, date, isCompleted}) =>
{
    const dateFromTimestamp = new Date(date);
    const dateFormatted = dateFormatter(dateFromTimestamp);

    const [info, setInfo] = useState({title,description});
    const checkClass = isCompleted ? "todo-item-content is-check" : "todo-item-content";

    const handleCheck = () =>
    {
        onEdit({"id":id, "title":info.title, "description":info.description, "isCompleted":!isCompleted});
    }

    const handleChangeTitle = (event) =>
    {
        const newInfo = {"title":event.target.value,"description":info.description};
        setInfo(newInfo);
    }

    const handleChangeDescription = (event) =>
    {
        const newInfo = {"title":info.title,"description":event.target.value};
        setInfo(newInfo);
    }

    const handleFinishChanges = () =>
    {
        onEdit({"id":id, "title":info.title, "description":info.description, "isCompleted":isCompleted});
    }

    const handleDeleteTodo = () =>
    {
        onDelete({"id":id});
    }

    return (
        <li className={checkClass}>
            <div className="todo-item-info-content">
                <input onChange={handleChangeTitle} onBlur={handleFinishChanges} type="text" className="todo-item-info-title" value={info.title}/>
                <input onChange={handleChangeDescription} onBlur={handleFinishChanges} type="text" className="todo-item-info-description" value={info.description}/>
            </div>
            <p className="todo-item-date">{dateFormatted}</p>
            <div className="todo-item-inputs">
                <input className="todo-item-toggle" type="checkbox" checked={isCompleted} onChange={handleCheck}/>
                <button className="todo-item-delete" onClick={handleDeleteTodo}>X</button>
            </div>
        </li>
    )
}

export default Todo;