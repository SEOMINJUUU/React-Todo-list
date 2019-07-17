import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import styles from './Input.module.css';

const Input = ({ onAddClick }) => {
  const inputEl = useRef(null);
  let text = '';

  const renderTask = () => {
    if (text === '') return;

    onAddClick(text.trim());

    inputEl.current.value = '';
    inputEl.current.focus(); // 입력 후 다시 input에 포커스
  };

  const handleKeyPress = e => {
    e.key === 'Enter' && renderTask();
  };

  return (
    <div className={styles.wrapper}>
      <input // ref 사용 -> 등록 후 focus
        type="text"
        placeholder="New task"
        onChange={e => (text = e.target.value)}
        onKeyPress={handleKeyPress}
        ref={inputEl}
      />
      <button type="button" className={styles.btnBlue} onClick={renderTask}>
        <FaPlus /> Add
      </button>
    </div>
  );
};

export default Input;
