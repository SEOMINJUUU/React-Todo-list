import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ id }) => {
  const style = id === 'SHOW_ALL' ? styles.on : styles.off; // 초기 셋팅

  return (
    <li id={id} className={style}>
      {id.charAt(5) + id.toLowerCase().slice(6) /* SHOW_ALL => All */}
    </li>
  );
};

export default Filter;
