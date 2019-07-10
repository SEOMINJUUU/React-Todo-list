import React from 'react';
import styles from './Filter.module.css';

function Filter(props) {
  const { id, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li id={id} className={styles.off}>
      {id}
    </li>
  );
}

export default Filter;
