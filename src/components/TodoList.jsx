import { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos.js';
import '../styles/TodoList.css';
import Todo from './Todo.jsx';
import TodoInput from './TodoInput.jsx';

const TodoList = () =>
{
    const {todos,getTodo,addTodo,updateTodo,removeTodo,filterTodo} = useTodos();

    useEffect(()=>
    {      
        getTodo();
    },
    [])

    return (
        <div className='todo-list'>
            <ul className="todo-list-panel">
                {          
                    todos.map(({todo_id,todo_title,todo_description,todo_isCompleted}) => 
                        <Todo key={todo_id} 
                              onEdit={updateTodo} 
                              onDelete={removeTodo} 
                              id={todo_id}
                              title={todo_title}
                              description={todo_description ?? ""}
                              isCompleted={todo_isCompleted==1}
                              date={"01/02/24"}
                        />)
                }   
            </ul>
            <TodoInput addTodo={addTodo} filterTodo={filterTodo} />
        </div> 
    )
}

export default TodoList;