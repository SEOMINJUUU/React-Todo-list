import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/modules/tasks';

import { FaPlus } from 'react-icons/fa';
import styles from './Input.module.css';

const Input = ({ addTodo }) => {
  let text = '';
  const inputEl = useRef(null);

  const renderTask = () => {
    if (text === '') {
      return;
    }

    addTodo(text.trim());
    text = '';
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

const mapDispatchToProps = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(Input);
