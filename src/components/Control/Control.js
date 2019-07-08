import React, { useState } from 'react';
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa';
import Filter from '../Filter';
import './Control.css';

function Control(props) {
  const [filter, setFilter] = useState('all');
  const [hidden, setHidden] = useState(true);
  const { onRemoveAll, onCompleted, onFilter } = props;

  const handleClick = id => {
    setFilter(id);
    onFilter(id);
  };

  return (
    <div id="control">
      <button
        type="button"
        className="btn btn-purple"
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <FaFilter /> Filter
      </button>

      <ul className={hidden ? 'hide' : 'show-inline-block'}>
        <Filter id="all" filter={filter} onClick={handleClick} />
        <Filter id="todo" filter={filter} onClick={handleClick} />
        <Filter id="completed" filter={filter} onClick={handleClick} />
      </ul>

      <button type="button" className="btn btn-red" onClick={onRemoveAll}>
        <FaTrashAlt /> Clear All
      </button>

      <button type="button" className="btn btn-orange" onClick={onCompleted}>
        <FaCheck /> Clear Completed
      </button>
    </div>
  );
}

export default Control;
