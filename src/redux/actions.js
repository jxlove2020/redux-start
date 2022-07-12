export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO'

// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  }
}