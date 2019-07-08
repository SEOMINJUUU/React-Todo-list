import React, { useState } from 'react';
import Title from './components/Title';
import Content from './components/Content';
import './App.css';

function App() {
  document.title = 'Todo-list';

  const [leftTasks, setLeftTasks] = useState(0);

  const handleChange = num => {
    setLeftTasks(num);
  };

  return (
    <div className="App">
      <Title leftTask={leftTasks} />
      <Content leftTask={leftTasks} onChange={handleChange} />
    </div>
  );
}

export default App;
