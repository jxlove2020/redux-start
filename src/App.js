import './App.css';
import useReduxState from './hooks/useReduxState';
import useReduxDispatch from './hooks/useReduxDispatch';
import { addTodo } from './redux/actions';

function App() {
  const state = useReduxState()
  const dispatch = useReduxDispatch()

  return (
    <div className="App">
      <div>{JSON.stringify(state)}</div>
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    dispatch(addTodo('할일'))
  }
}

export default App;
