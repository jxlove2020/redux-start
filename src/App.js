import { useContext, useEffect, useState } from 'react';
import './App.css';
import ReduxContext from './contexts/ReduxContext';
import { addTodo } from './redux/actions';

function useReduxState() {
  const store = useContext(ReduxContext)
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })
    return () => { unsubscribe() }
  }, [store])

  return state
}

function useReduxDispatch() {
  const store = useContext(ReduxContext)
  return store.dispatch
}

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
