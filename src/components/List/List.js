import React from 'react';
import Task from '../Task';
import styles from './List.module.css';

const List = ({ tasks, onRemove, onToggle }) => {
  const currentTasks = tasks.map(({ id, text, completed }) => (
    <Task key={id} text={text} completed={completed} onRemove={() => onRemove(id)} onToggle={() => onToggle(id)} />
  ));
  return <ul className={styles.list}>{currentTasks}</ul>;
};

export default List;
