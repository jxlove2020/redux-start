import './App.css';

import TodoListContainer from './container/TodoListContainer';
import TodoFormContainer from './container/TodoFormContainer';

function App() {

  return (
    <div className="App">
      <div>
        <TodoListContainer />
        <TodoFormContainer />
      </div>
    </div>
  );

}

export default App;
