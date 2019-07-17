import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTodo,
  removeCompleted,
  removeAll,
  removeTodo,
  completeTodo,
  setFilter,
  VisibilityFilters
} from '../actions';
import Input from '../components/Input';
import Control from '../components/Control';
import List from '../components/List';

const Content = ({ addTodo, removeCompleted, removeAll, removeTodo, completeTodo, setFilter, visibleTodos }) => {
  return (
    <>
      <Input onAddClick={text => addTodo(text)} />
      <Control
        onSetFilter={nextFilter => setFilter(nextFilter)}
        onRemoveCompleted={() => removeCompleted()}
        onRemoveAll={() => removeAll()}
      />
      <List tasks={visibleTodos} onRemove={id => removeTodo(id)} onToggle={id => completeTodo(id)} />
    </>
  );
};

const selectTodos = (tasks, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks;
    case VisibilityFilters.SHOW_TODO:
      return tasks.filter(task => !task.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return tasks.filter(task => task.completed);
    default:
  }
};

const select = state => {
  return {
    visibleTodos: selectTodos(state.tasks, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, removeCompleted, removeAll, removeTodo, completeTodo, setFilter }, dispatch);
// onAddTodo: text => dispatch(addTodo(text)),
// onRemoveCompleted: () => dispatch(removeCompleted()),
// onRemoveAll: () => dispatch(removeAll()),
// onRemoveTodo: id => dispatch(removeTodo(id)),
// onCompleteTodo: id => dispatch(completeTodo(id)),
// onSetFilter: nextFilter => dispatch(setFilter(nextFilter))

export default connect(
  select,
  mapDispatchToProps
)(Content);
