import React from 'react';
import {
  addTodo,
  removeCompleted,
  removeAll,
  removeTodo,
  completeTodo,
  setFilter,
  VisibilityFilters
} from '../actions';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Control from '../components/Control';
import List from '../components/List';

const Content = ({
  onAddTodo,
  onRemoveCompleted,
  onRemoveAll,
  onRemoveTodo,
  onCompleteTodo,
  onSetFilter,
  visibleTodos
}) => {
  return (
    <>
      <Input onAddClick={text => onAddTodo(text)} />
      <Control
        onSetFilter={nextFilter => onSetFilter(nextFilter)}
        onRemoveCompleted={() => onRemoveCompleted()}
        onRemoveAll={() => onRemoveAll()}
      />
      <List tasks={visibleTodos} onRemove={id => onRemoveTodo(id)} onToggle={id => onCompleteTodo(id)} />
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

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
  onRemoveCompleted: () => dispatch(removeCompleted()),
  onRemoveAll: () => dispatch(removeAll()),
  onRemoveTodo: id => dispatch(removeTodo(id)),
  onCompleteTodo: id => dispatch(completeTodo(id)),
  onSetFilter: nextFilter => dispatch(setFilter(nextFilter))
});

export default connect(
  select,
  mapDispatchToProps
)(Content);
