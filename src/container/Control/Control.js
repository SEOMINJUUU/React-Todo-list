import React, { useState } from 'react';
import { connect } from 'react-redux';

import { removeCompleted, removeAll } from '../../store/modules/tasks';
import { setFilter } from '../../store/modules/filters';
import Filter from '../../components/Filter';

import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa';
import classnames from 'classnames/bind';
import styles from './Control.module.css';

const cx = classnames.bind(styles);

const Control = ({ removeCompleted, removeAll, setFilter }) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = e => {
    const children = e.currentTarget.children;
    for (const child of children) child.className = styles.off;
    e.target.className = styles.on;
    setFilter(e.target.id);
  };

  const handleHide = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.btnPurple} onClick={handleHide}>
        <FaFilter /> Filter
      </button>

      <ul
        className={cx('filterList', !hidden && 'show-inline-block')}
        onClick={e => handleClick(e)}
      >
        <Filter id="SHOW_ALL" />
        <Filter id="SHOW_TODO" />
        <Filter id="SHOW_COMPLETED" />
      </ul>

      <button
        type="button"
        className={styles.btnRed}
        onClick={e => {
          e.stopPropagation();
          removeAll();
        }}
      >
        <FaTrashAlt /> Clear All
      </button>

      <button
        type="button"
        className={styles.btnOrange}
        onClick={removeCompleted}
      >
        <FaCheck /> Clear Completed
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  removeCompleted,
  removeAll,
  setFilter
};

export default connect(
  null,
  mapDispatchToProps
)(Control);
