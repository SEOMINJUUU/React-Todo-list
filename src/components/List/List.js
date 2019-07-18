import React from 'react';
import Task from '../Task';
import styles from './List.module.css';

const List = ({ tasks, onRemove, onToggle }) => {
  return (
    <ul className={styles.list}>
      {tasks &&
        tasks.map(({ id, text, completed }) => (
          <Task
            key={id}
            text={text}
            completed={completed}
            onRemove={() => onRemove(id)}
            onToggle={() => onToggle(id)}
          />
        ))}
    </ul>
  );
};

export default List;
