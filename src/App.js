import React from 'react';
import Title from './container/Title';
import Content from './container/Content';
import styles from './App.module.css';

const App = () => {
  document.title = 'Todo-list';

  return (
    <div className={styles.wrapper}>
      <Title />
      <Content />
    </div>
  );
};

export default App;
