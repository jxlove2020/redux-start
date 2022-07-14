import { useRef } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

function TodoForm({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input placeholder="할일을 입력해 주세요" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  )
  function click() {
    add(inputRef.current.value)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text))
    }
  })
)(TodoForm)