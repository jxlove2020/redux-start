import { useEffect, useState } from 'react';
import './App.css';
import { addTodo } from './redux/actions';

function App({ store }) {
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })
    return () => { unsubscribe() }
  }, [store])
  return (
    <div className="App">
      <div>{JSON.stringify(state)}</div>
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    store.dispatch(addTodo('할일'))
  }
}

export default App;
