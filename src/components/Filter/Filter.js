import React from 'react';
import classnames from 'classnames';
import './Filter.module.css';

function Filter(props) {
  const { id, filter, onClick } = props;
  const turn = filter === id ? 'on' : 'off';
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li id={id} className={classnames(turn)} onClick={() => onClick(id)} onKeyDown={() => {}}>
      {id}
    </li>
  );
}

export default Filter;
