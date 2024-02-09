import { useState } from "react";
import "../styles/TodoItem.css";

const TodoItem = ({title, description, date, isCompleted}) =>
{
    const [isCheck, setCheck] = useState(isCompleted);
    const [info, setInfo] = useState({title, description});

    const checkText = isCheck ? "X" : "✓";
    const checkClass = isCheck ? "todo-item-content is-check" : "todo-item-content";

    const handleCheck = () =>
    {
        setCheck(!isCheck);
    }

    const handleChangeTitle = (event) =>
    {
        const newInfo = {...info, title:event.target.value};
        setInfo(newInfo);
    }

    const handleChangeDescription = (event) =>
    {
        const newInfo = {...info, description:event.target.value};
        setInfo(newInfo);
    }

    return (
        <div className={checkClass}>
            <div className="todo-item-info-content">
                <input onChange={handleChangeTitle} type="text" className="todo-item-info-title" value={info.title}/>
                <input onChange={handleChangeDescription} type="text" className="todo-item-info-description" value={info.description}/>
            </div>
            <p className="todo-item-date">{date}</p>
            <button onClick={handleCheck} className="todo-item-toggle">{checkText}</button>
        </div>
    )
}

export default TodoItem;