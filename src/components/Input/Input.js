import React, { useState, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import styles from './Input.module.css';

function Input(props) {
  const [text, setText] = useState('');
  const { onChange } = props;
  const inputEl = useRef(null);

  const renderTask = () => {
    if (text === '') return;

    onChange(text);
    setText('');
    inputEl.current.focus();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') renderTask();
  };

  return (
    <div className={styles.wrapper}>
      <input // ref 사용 -> 등록 후 focus
        type="text"
        placeholder="New task"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        ref={inputEl}
      />
      <button type="button" className={styles.btnBlue} onClick={renderTask}>
        <FaPlus /> Add
      </button>
    </div>
  );
}

export default Input;
