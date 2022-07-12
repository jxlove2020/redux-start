import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

// 구독하게 되면 state값이 변경 될 때 마다 호출
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('책 읽기'))
store.dispatch(addTodo('캐치볼 하기'))
store.dispatch(addTodo('줄넘기 하기'))

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
