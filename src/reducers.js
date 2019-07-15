import { combineReducers } from 'redux';
import {
  ADD_TODO,
  REMOVE_COMPLETED,
  REMOVE_ALL,
  REMOVE_TODO,
  COMPLETE_TODO,
  SET_FILTER,
  VisibilityFilters
} from './actions';
const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

let id = -1;
const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      id += 1;
      return [...state, { id: id, text: action.text, completed: false }];
    case REMOVE_COMPLETED:
      return [...state.filter(task => task.completed === false)];
    case REMOVE_ALL:
      return [];
    case REMOVE_TODO:
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)];
    case COMPLETE_TODO:
      const completed = state[action.id].completed;

      return [
        ...state.slice(0, action.id),
        Object.assign({}, state[action.id], {
          completed: !completed
        }),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  tasks
});

export default todoApp;
