import React from 'react';
import styles from './Title.module.css';

const Title = ({ leftTask }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.h1}>Tasks </span>({leftTask})
    </div>
  );
};

export default Title;
