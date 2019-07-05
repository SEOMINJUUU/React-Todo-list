import React from 'react';
import './Task.css';
import { FaTimes } from 'react-icons/fa';

function Task(props) {
  const { id, text, checked, onToggle, onRemove } = props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={checked ? 'completed-list' : ''} onClick={() => onToggle(id)}>
      {text}
      <button
        type="button"
        className="btn btn-red delete"
        onClick={e => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        <FaTimes />
      </button>
    </li>
  );
}

export default Task;
