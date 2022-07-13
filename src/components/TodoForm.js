import { useRef } from 'react'
import useReduxDispatch from '../hooks/useReduxDispatch';
import { addTodo } from '../redux/actions';

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();
  return (
    <div>
      <input placeholder="할일을 입력해 주세요" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  )
  function click() {
    dispatch(addTodo(inputRef.current.value))
    inputRef.current.value = ''
    inputRef.current.focus()
  }
}