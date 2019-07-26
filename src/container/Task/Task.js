import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from '../../store/modules/tasks';

import { FaTimes } from 'react-icons/fa';
import classnames from 'classnames/bind';
import styles from './Task.module.css';

const cx = classnames.bind(styles);

const Task = ({ id, text, completed, removeTodo, completeTodo }) => {
  return (
    <li className={cx('li', { completed })} onClick={() => completeTodo(id)}>
      {text}
      <button
        type="button"
        className={styles.delete}
        onClick={() => removeTodo(id)}
      >
        <FaTimes />
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  removeTodo,
  completeTodo
};

export default connect(
  null,
  mapDispatchToProps
)(Task);
