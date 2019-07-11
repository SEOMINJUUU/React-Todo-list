import React, { useState } from 'react';
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa';
import classnames from 'classnames/bind';
import Filter from '../Filter';
import styles from './Control.module.css';

const cx = classnames.bind(styles);

const Control = ({ onRemoveAll, onCompleted, onFilter }) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = e => {
    const children = e.currentTarget.children;
    for (const child of children) child.className = styles.off;
    e.target.className = styles.on;
    onFilter(e.target.id);
  };

  const handleHide = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.btnPurple} onClick={handleHide}>
        <FaFilter /> Filter
      </button>

      <ul className={cx('filterList', hidden ? 'hide' : 'show-inline-block')} onClick={e => handleClick(e)}>
        <Filter id="all" />
        <Filter id="todo" />
        <Filter id="completed" />
      </ul>

      <button type="button" className={styles.btnRed} onClick={onRemoveAll}>
        <FaTrashAlt /> Clear All
      </button>

      <button type="button" className={styles.btnOrange} onClick={onCompleted}>
        <FaCheck /> Clear Completed
      </button>
    </div>
  );
};

export default Control;
