import React from 'react';
import { connect } from 'react-redux';

import {
  addTodo,
  removeCompleted,
  removeAll,
  removeTodo,
  completeTodo
} from '../store/modules/tasks';
import { setFilter, VisibilityFilters } from '../store/modules/filters';
import Input from '../components/Input';
import Control from '../components/Control';
import List from '../components/List';

const Content = ({
  addTodo,
  removeCompleted,
  removeAll,
  removeTodo,
  completeTodo,
  setFilter,
  visibleTodos
}) => {
  return (
    <>
      <Input onAddClick={text => addTodo(text)} />
      <Control
        onSetFilter={nextFilter => setFilter(nextFilter)}
        onRemoveCompleted={() => removeCompleted()}
        onRemoveAll={() => removeAll()}
      />
      <List
        tasks={visibleTodos}
        onRemove={id => removeTodo(id)}
        onToggle={id => completeTodo(id)}
      />
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
  console.log(state.filters);
  return {
    visibleTodos: selectTodos(state.tasks, state.filters),
    visibilityFilter: state.filters
  };
};

const mapDispatchToProps = {
  addTodo,
  removeCompleted,
  removeAll,
  removeTodo,
  completeTodo,
  setFilter
};

export default connect(
  select,
  mapDispatchToProps
)(Content);
