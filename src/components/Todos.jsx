import '../styles/Todos.css';
import TodoItem from "./TodoItem.jsx";

const Todos = ({todos}) =>
{
    return ( 
        <div className="todo-list-panel">
            { 
                todos.map(todoProps => <TodoItem key={todoProps.id} {...todoProps} />)
            }   
        </div>    
    )
}

export default Todos;