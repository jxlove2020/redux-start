import './App.css';
import useReduxDispatch from './hooks/useReduxDispatch';
import { addTodo } from './redux/actions';
import TodoList from './components/TodoList';

function App() {
  const dispatch = useReduxDispatch()

  return (
    <div className="App">
      <div><TodoList /></div>
      <button onClick={click}>추가</button>

      {/* <TodoForm /> */}
    </div>
  );

  function click() {
    dispatch(addTodo('할일'))
  }
}

export default App;
