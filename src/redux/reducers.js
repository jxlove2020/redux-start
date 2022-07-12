import { ADD_TODO, COMPLETE_TODO } from './actions'

// 초기값 설정 다른 방법
const initialState = { todos: [], filter: 'ALL' };

export function todoApp(previousState = initialState, action) {

  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [...previousState.todos, { text: action.text, done: false }]
    }
  }

  if (action.type === COMPLETE_TODO) {
    return {
      ...previousState,
      todos: previousState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true }
        }
        return todo
      })
    }
  }

  return previousState
}