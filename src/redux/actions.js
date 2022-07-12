export const ADD_TODO = 'ADD_TODO';

// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}