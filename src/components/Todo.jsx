import "../styles/Todo.css";

const Todo = ({onEdit, onDelete, id, title, description, date, isCompleted}) =>
{
    const info = 
    {
        "title":title,
        "description":description,
        "isCompleted":isCompleted
    }

    const checkClass = info.isCompleted ? "todo-item-content is-check" : "todo-item-content";

    const handleCheck = () =>
    {
        info.isCompleted = !isCompleted;

        onEdit(id, info);
    }

    const handleChangeTitle = (event) =>
    {
        info.title = event.target.value;

        onEdit(id,info);
    }

    const handleChangeDescription = (event) =>
    {
        info.description = event.target.value;

        onEdit(id,info);
    }

    const handleDeleteTodo = () =>
    {
        onDelete(id);
    }

    return (
        <li className={checkClass}>
            <div className="todo-item-info-content">
                <input onChange={handleChangeTitle} type="text" className="todo-item-info-title" value={info.title}/>
                <input onChange={handleChangeDescription} type="text" className="todo-item-info-description" value={info.description}/>
            </div>
            <p className="todo-item-date">{date}</p>
            <div className="todo-item-inputs">
                <input className="todo-item-toggle" type="checkbox" checked={info.isCompleted} onChange={handleCheck}/>
                <button className="todo-item-delete" onClick={handleDeleteTodo}>X</button>
            </div>
        </li>
    )
}

export default Todo;