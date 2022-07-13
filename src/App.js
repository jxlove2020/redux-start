import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  return (
    <div className="App">
      <div><TodoList /></div>
      <TodoForm />
    </div>
  );

}

export default App;
