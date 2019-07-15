import React from 'react';
import Title from './components/Title';
import Content from './container/Content';
import styles from './App.module.css';

const App = store => {
  document.title = 'Todo-list';
  const handleClick = t => {
    console.log(store);
  };
  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  return (
    <div className={styles.wrapper}>
      <Title onClick={handleClick} />
      <Content />
    </div>
  );
};

export default App;
