import { createAction, handleActions } from 'redux-actions';

export const SET_FILTER = 'filters/SET_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'filters/SHOW_ALL',
  SHOW_TODO: 'filters/SHOW_TODO',
  SHOW_COMPLETED: 'filters/SHOW_COMPLETED'
};

export const setFilter = createAction(SET_FILTER, filter => filter);

export default handleActions(
  { [SET_FILTER]: (state, { payload }) => 'filters/' + (payload || state) },
  VisibilityFilters.SHOW_ALL
);
