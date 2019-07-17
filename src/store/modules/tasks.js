import { createAction, handleActions } from 'redux-actions';

export const ADD_TODO = 'tasks/ADD_TODO';
export const REMOVE_COMPLETED = 'tasks/REMOVE_COMPLETED';
export const REMOVE_ALL = 'tasks/REMOVE_ALL';
export const REMOVE_TODO = 'tasks/REMOVE_TODO';
export const COMPLETE_TODO = 'tasks/COMPLETE_TODO';

let id = 0;
export const addTodo = createAction(ADD_TODO, text => ({ text, id: id++ })); // text
export const removeCompleted = createAction(REMOVE_COMPLETED);
export const removeAll = createAction(REMOVE_ALL);
export const removeTodo = createAction(REMOVE_TODO, id => id); // id
export const completeTodo = createAction(COMPLETE_TODO, id => id); // id

export default handleActions(
  {
    [ADD_TODO]: (state, { payload }) => state.concat({ id: payload.id, text: payload.text, completed: false }),

    [REMOVE_COMPLETED]: state => state.filter(task => task.completed === false),

    [REMOVE_ALL]: () => [],

    [REMOVE_TODO]: (state, { payload }) => [...state.slice(0, payload), ...state.slice(payload + 1)],

    [COMPLETE_TODO]: (state, { payload }) => {
      const completed = state.findIndex(task => task.id === payload);
      return [
        ...state.slice(0, completed),
        Object.assign({}, state[completed], {
          completed: !state[completed].completed
        }),
        ...state.slice(completed + 1)
      ];
    }
  },
  []
);
