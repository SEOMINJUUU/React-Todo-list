import React, { useState } from 'react';
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa';
import classnames from 'classnames/bind';
import Filter from '../Filter';
import styles from './Control.module.css';

const cx = classnames.bind(styles);

function Control(props) {
  const [filter, setFilter] = useState('all');
  const [hidden, setHidden] = useState(true);
  const { onRemoveAll, onCompleted, onFilter } = props;

  const handleClick = id => {
    setFilter(id);
    onFilter(id);
  };

  const handleHide = () => {
    setHidden(!hidden);
  };

  return (
    <div id="control">
      <button type="button" className={styles.btnPurple} onClick={handleHide}>
        <FaFilter /> Filter
      </button>

      <ul className={cx('filterList', hidden ? 'hide' : 'show-inline-block')}>
        <Filter id="all" filter={filter} onClick={handleClick} />
        <Filter id="todo" filter={filter} onClick={handleClick} />
        <Filter id="completed" filter={filter} onClick={handleClick} />
      </ul>

      <button type="button" className={styles.btnRed} onClick={onRemoveAll}>
        <FaTrashAlt /> Clear All
      </button>

      <button type="button" className={styles.btnOrange} onClick={onCompleted}>
        <FaCheck /> Clear Completed
      </button>
    </div>
  );
}

export default Control;
