import React from 'react';
import './Input.css';
import { FaPlus } from 'react-icons/fa';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.renderTask();
    }
  };

  renderTask = () => {
    const { text } = this.state;
    const { onChange } = this.props;

    if (text === '') {
      return;
    }

    onChange(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    const { handleKeyPress, renderTask } = this;

    return (
      <div id="input">
        <input
          type="text"
          placeholder="New task"
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
          onKeyPress={handleKeyPress}
        />
        <button type="button" className="btn btn-blue" onClick={renderTask}>
          <FaPlus /> Add
        </button>
      </div>
    );
  }
}

export default Input;
