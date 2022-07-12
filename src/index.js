import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo, completeTodo } from './redux/actions';

// 구독하게 되면 state값이 변경 될 때(dispatch 될 때) 마다 호출 , return 값이 unsubscribe
// 구독 취소는 unsubscribe()
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('할일'))
store.dispatch(completeTodo(0))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
