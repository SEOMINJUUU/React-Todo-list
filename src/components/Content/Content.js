import React from 'react';
import Input from '../Input';
import Control from '../Control';
import List from '../List';

class Content extends React.Component {
  // 왜 안에 선언하면 안될까
  id = 0;

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filter: 'all'
    };
  }

  handleChange = text => {
    const { onChange, leftTask } = this.props;

    this.setState(prevState => ({
      tasks: prevState.tasks.concat({
        id: this.id,
        text,
        checked: false
      })
    }));
    this.id += 1;
    onChange(leftTask + 1);
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleRemoveAll = () => {
    const { onChange } = this.props;

    this.setState({ tasks: [] });
    onChange(0);
  };

  handleCompleted = () => {
    const { tasks } = this.state;
    const { onChange } = this.props;

    const nextTasks = tasks.filter(task => task.checked === false);
    this.setState({
      tasks: nextTasks
    });
    onChange(nextTasks.length);
  };

  handleRemove = id => {
    const { tasks } = this.state;
    const { onChange, leftTask } = this.props;

    const index = tasks.findIndex(task => task.id === id);

    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => id !== task.id)
    }));
    if (!tasks[index].checked) onChange(leftTask - 1);
  };

  handleToggle = id => {
    const { tasks } = this.state;
    const { onChange, leftTask } = this.props;

    const tmp = [...tasks];
    const index = tasks.findIndex(task => task.id === id);
    const selected = tasks[index];

    tmp[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      tasks: tmp
    });
    onChange(selected.checked ? leftTask + 1 : leftTask - 1);
  };

  render() {
    const { tasks, filter } = this.state;
    const { handleChange, handleFilter, handleCompleted, handleRemoveAll, handleRemove, handleToggle } = this;

    return (
      <div>
        <Input onChange={handleChange} />
        <Control onFilter={handleFilter} onCompleted={handleCompleted} onRemoveAll={handleRemoveAll} />
        <List tasks={tasks} filter={filter} onRemove={handleRemove} onToggle={handleToggle} />
      </div>
    );
  }
}

export default Content;
