import React from 'react';
import Task from '../Task';
import styles from './List.module.css';

const List = ({ tasks, onRemove, onToggle }) => {
  const currentTasks = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      completed={task.completed}
      onRemove={() => onRemove(task.id)}
      onToggle={() => onToggle(task.id)}
    />
  ));
  return <ul className={styles.list}>{currentTasks}</ul>;
};

export default List;
