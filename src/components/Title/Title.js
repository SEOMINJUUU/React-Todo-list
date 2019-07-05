import React from 'react';
import './Title.css';

function Title(props) {
  const { leftTask } = props;
  return (
    <div id="title">
      <span className="h1">Tasks </span>({leftTask})
    </div>
  );
}

export default Title;
