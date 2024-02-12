import { useTodos } from '../hooks/useTodo.js';
import '../styles/Todos.css';
import Todo from './Todo.jsx';
import TodoInput from './TodoInput.jsx';

const TodoList = () =>
{
    const {todos,addTodoItem,removeTodoItem,editTodoItem, filterTodoItem} = useTodos();

    console.log(todos);

    return (
        <div className='todo-list'>
            <ul className="todo-list-panel">
                {          
                    todos.map(todo => 
                        <Todo key={todo.id} 
                              onEdit={editTodoItem} 
                              onDelete={removeTodoItem} 
                              {...todo}
                        />)
                }   
            </ul>
            <TodoInput addTodo={addTodoItem} filterTodo={filterTodoItem} />
        </div> 
    )
}

export default TodoList;