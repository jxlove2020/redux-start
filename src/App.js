import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  return (
    <div className="App">
      <div>
        <TodoList />
        <TodoForm />
      </div>
    </div>
  );

}

export default App;
