import { useTodos } from '../hooks/useTodo.js';
import '../styles/Todos.css';
import Todo from './Todo.jsx';
import TodoInput from './TodoInput.jsx';

const TodoList = () =>
{
    const {todos,addTodoItem,removeTodoItem,editTodoItem} = useTodos();

    return (
        <div className='todo-list'>
            <ul className="todo-list-panel">
                { 
                    todos.map(todoProps => <Todo key={todoProps.id} onEdit={editTodoItem} onDelete={removeTodoItem} {...todoProps}/>)
                }   
            </ul>
            <TodoInput addTodo={addTodoItem} />
        </div> 
    )
}

export default TodoList;