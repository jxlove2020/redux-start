import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

// 구독하게 되면 state값이 변경 될 때(dispatch 될 때) 마다 호출 , return 값이 unsubscribe
// 구독 취소는 unsubscribe()
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('책 읽기'))
store.dispatch(addTodo('캐치볼 하기'))
store.dispatch(addTodo('줄넘기 하기'))
unsubscribe() // 구독 취소는 했지만 State 값은 변경되어 저장 된다. subscribe 함수 내의 동작만 하지 않는 것
store.dispatch(addTodo('피아노 연주'))
store.dispatch(addTodo('기타 연주'))
store.dispatch(addTodo('그림 그리기'))
console.log(store.getState())

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
