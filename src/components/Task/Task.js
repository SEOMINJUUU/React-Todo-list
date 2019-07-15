import React from 'react';
import { FaTimes } from 'react-icons/fa';
import classnames from 'classnames/bind';
import styles from './Task.module.css';

const cx = classnames.bind(styles);

const Task = ({ id, text, completed, onToggle, onRemove }) => {
  return (
    <li className={cx('li', { completed })} onClick={() => onToggle(id)}>
      {text}
      <button
        type="button"
        className={styles.delete}
        onClick={e => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        <FaTimes />
      </button>
    </li>
  );
};

export default Task;
