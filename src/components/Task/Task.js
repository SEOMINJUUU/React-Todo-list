import React from 'react';
import classnames from 'classnames/bind';
import { FaTimes } from 'react-icons/fa';
import styles from './Task.module.css';

const cx = classnames.bind(styles);

function Task(props) {
  const { id, text, checked, onToggle, onRemove } = props;

  return (
    <li className={cx('task', { checked })} onClick={() => onToggle(id)}>
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
}

export default Task;
