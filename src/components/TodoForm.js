import { useRef } from 'react'

export default function TodoForm({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input placeholder="할일을 입력해 주세요" ref={inputRef} onKeyPress={onKeyDown} />
      <button onClick={click}>추가</button>
    </div>
  )
  function click() {
    add(inputRef.current.value)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  function onKeyDown(e) {
    if (e.key === "Enter") {
      click()
    }
  }
}