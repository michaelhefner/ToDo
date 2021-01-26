
import TodoList from './todos/TodoList';
import './App.css';
import User from './user/User';

function App() {
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center">
      <User/>
      <TodoList />
      
    </div>
  );
}

export default App;
