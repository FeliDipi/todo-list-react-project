import "../styles/Todo.css";

const Todo = ({onEdit, onDelete, id, title, description, date, isCompleted}) =>
{
    const checkClass = isCompleted ? "todo-item-content is-check" : "todo-item-content";

    const handleCheck = () =>
    {
        onEdit({"id":id, "title":title, "description":description, "isCompleted":!isCompleted});
    }

    const handleChangeTitle = (event) =>
    {
        onEdit({"id":id, "title":event.target.value, "description":description, "isCompleted":!isCompleted});
    }

    const handleChangeDescription = (event) =>
    {
        onEdit({"id":id, "title":title, "description":event.target.value, "isCompleted":!isCompleted});
    }

    const handleDeleteTodo = () =>
    {
        onDelete({"id":id});
    }

    return (
        <li className={checkClass}>
            <div className="todo-item-info-content">
                <input onChange={handleChangeTitle} type="text" className="todo-item-info-title" value={title}/>
                <input onChange={handleChangeDescription} type="text" className="todo-item-info-description" value={description}/>
            </div>
            <p className="todo-item-date">{date}</p>
            <div className="todo-item-inputs">
                <input className="todo-item-toggle" type="checkbox" checked={isCompleted} onChange={handleCheck}/>
                <button className="todo-item-delete" onClick={handleDeleteTodo}>X</button>
            </div>
        </li>
    )
}

export default Todo;