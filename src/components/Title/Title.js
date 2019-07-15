import React from 'react';
import styles from './Title.module.css';

const Title = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={t => onClick(t)}>
      <span className={styles.h1}>Tasks </span>
    </div>
  );
};

export default Title;
