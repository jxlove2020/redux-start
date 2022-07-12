import { ADD_TODO } from './actions'

// 초기값 설정 다른 방법
const initialState = [];

export function todoApp(previousState = initialState, action) {
  // // 초기값 설정해주는 부분
  // if (previousState === undefined) {
  //   return []
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo]
  }

  return previousState
}