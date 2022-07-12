import { ADD_TODO } from './actions'
function todoApp(previousState, action) {
  // 초기값 설정해주는 부분
  if (previousState === undefined) {
    return []
  }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo]
  }

  return previousState
}