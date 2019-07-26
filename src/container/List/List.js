import React from 'react';
import { connect } from 'react-redux';

import { VisibilityFilters } from '../../store/modules/filters';
import Task from '../Task';
import styles from './List.module.css';

const List = ({ visibleTodos }) => {
  return (
    <ul className={styles.list}>
      {visibleTodos &&
        visibleTodos.map(({ id, text, completed }) => (
          <Task key={id} id={id} text={text} completed={completed} />
        ))}
    </ul>
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
    visibleTodos: selectTodos(state.tasks, state.filters),
    visibilityFilter: state.filters
  };
};

export default connect(select)(List);
