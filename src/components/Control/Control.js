import React, { useState } from 'react';
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa';
import Filter from '../Filter';
import classnames from 'classnames/bind';
import styles from './Control.module.css';

const cx = classnames.bind(styles);

const Control = ({ onSetFilter, onRemoveCompleted, onRemoveAll }) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = e => {
    const children = e.currentTarget.children;
    for (const child of children) child.className = styles.off;
    e.target.className = styles.on;
    onSetFilter(e.target.id);
  };

  const handleHide = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.btnPurple} onClick={handleHide}>
        <FaFilter /> Filter
      </button>

      <ul className={cx('filterList', !hidden && 'show-inline-block')} onClick={e => handleClick(e)}>
        <Filter id="SHOW_ALL" />
        <Filter id="SHOW_TODO" />
        <Filter id="SHOW_COMPLETED" />
      </ul>

      <button type="button" className={styles.btnRed} onClick={onRemoveAll}>
        <FaTrashAlt /> Clear All
      </button>

      <button type="button" className={styles.btnOrange} onClick={onRemoveCompleted}>
        <FaCheck /> Clear Completed
      </button>
    </div>
  );
};

export default Control;
