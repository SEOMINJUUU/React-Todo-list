import React, { useState } from 'react';
import Title from './components/Title';
import Content from './components/Content';
import styles from './App.module.css';

const App = () => {
  const [leftTasks, setLeftTasks] = useState(0);

  const handleChange = num => {
    setLeftTasks(num);
  };

  document.title = 'Todo-list';
  return (
    <div className={styles.wrapper}>
      <Title leftTask={leftTasks} />
      <Content leftTask={leftTasks} onChange={handleChange} />
    </div>
  );
};

export default App;
