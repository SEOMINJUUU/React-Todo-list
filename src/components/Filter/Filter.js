import React from 'react';
import './Filter.css';

function Filter(props) {
  const { id, filter, onClick } = props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li id={id} className={filter === id ? 'filter-on' : 'filter-off'} onClick={() => onClick(id)}>
      {id}
    </li>
  );
}

export default Filter;
