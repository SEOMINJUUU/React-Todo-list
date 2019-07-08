import React, { useState } from 'react';
import './Input.css';
import { FaPlus } from 'react-icons/fa';

function Input(props) {
  const [text, setText] = useState('');
  const { onChange } = props;

  const renderTask = () => {
    if (text === '') return;

    onChange(text);
    setText('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') renderTask();
  };

  return (
    <div id="input">
      <input // ref 사용 -> 등록 후 focus
        type="text"
        placeholder="New task"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type="button" className="btn btn-blue" onClick={renderTask}>
        <FaPlus /> Add
      </button>
    </div>
  );
}

export default Input;
