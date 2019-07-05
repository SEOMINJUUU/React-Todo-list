import React from 'react';
import Title from './components/Title';
import Content from './components/Content';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftTasks: 0
    };
  }

  componentDidMount() {
    document.title = 'Todo-list';
  }

  handleChange = num => {
    this.setState({
      leftTasks: num
    });
  };

  render() {
    const { leftTasks } = this.state;
    const { handleChange } = this;

    return (
      <div className="App">
        <Title leftTask={leftTasks} />
        <Content leftTask={leftTasks} onChange={handleChange} />
      </div>
    );
  }
}

export default App;
