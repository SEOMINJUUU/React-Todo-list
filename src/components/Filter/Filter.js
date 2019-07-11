import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ id }) => {
  return (
    <li id={id} className={styles.off}>
      {id}
    </li>
  );
};

export default Filter;
