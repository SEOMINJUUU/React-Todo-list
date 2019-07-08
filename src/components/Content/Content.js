import React, { useState } from 'react';
import Input from '../Input';
import Control from '../Control';
import List from '../List';

function Content(props) {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const { onChange, leftTask } = props;

  const handleChange = text => {
    const nextTasks = tasks.concat({
      id,
      text,
      checked: false
    });
    setId(id + 1);
    setTasks(nextTasks);
    onChange(leftTask + 1);
  };

  const handleRemoveAll = () => {
    setTasks([]);
    onChange(0);
  };

  const handleCompleted = () => {
    const nextTasks = tasks.filter(task => task.checked === false);
    setTasks(nextTasks);
    onChange(nextTasks.length);
  };

  const handleRemove = removedId => {
    const index = tasks.findIndex(task => task.id === removedId);
    const nextTasks = tasks.filter(task => task.id !== removedId);
    setTasks(nextTasks);
    if (!tasks[index].checked) onChange(leftTask - 1);
  };

  const handleToggle = completedId => {
    const nextTasks = [...tasks];
    const index = tasks.findIndex(task => task.id === completedId);
    const selected = tasks[index];

    nextTasks[index] = {
      ...selected,
      checked: !selected.checked
    };

    setTasks(nextTasks);
    onChange(selected.checked ? leftTask + 1 : leftTask - 1);
  };

  return (
    <div>
      <Input onChange={handleChange} />
      <Control onFilter={() => setFilter(filter)} onCompleted={handleCompleted} onRemoveAll={handleRemoveAll} />
      <List tasks={tasks} filter={filter} onRemove={handleRemove} onToggle={handleToggle} />
    </div>
  );
}

export default Content;
