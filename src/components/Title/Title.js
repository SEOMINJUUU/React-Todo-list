import React from 'react'
import './Title.css'

function Title (props) {
  return (
    <div id='title'>
      <span className='h1'>Tasks </span>
      ({props.leftTask})
    </div>
  )
}

export default Title
