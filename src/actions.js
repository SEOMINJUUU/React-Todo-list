export const ADD_TODO = 'ADD_TODO';
export const SET_FILTER = 'SET_FILTER';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';
export const REMOVE_ALL = 'REMOVE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_TODO: 'SHOW_TODO',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}

export function removeCompleted() {
  return { type: REMOVE_COMPLETED };
}

export function removeAll() {
  return { type: REMOVE_ALL };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}
