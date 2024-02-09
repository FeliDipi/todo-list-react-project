import Todos from './components/Todos.jsx';
import { todos } from './mock/todos.js';
import './styles/App.css';

function App() {
  return (
      <Todos todos={todos}>
      </Todos>
    )
}

export default App
