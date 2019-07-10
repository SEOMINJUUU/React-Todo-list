import React from 'react';
import styles from './Filter.module.css';

function Filter(props) {
  const { id } = props;
  return (
    <li id={id} className={styles.off}>
      {id}
    </li>
  );
}

export default Filter;
