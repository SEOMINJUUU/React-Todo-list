import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ id }) => {
  const style = id === 'SHOW_ALL' ? styles.on : styles.off;

  return (
    <li id={id} className={style}>
      {id.charAt(5) + id.toLowerCase().slice(6)}
    </li>
  );
};

export default Filter;
