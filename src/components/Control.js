import React from 'react'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'

class Control extends React.Component {
  render () {
    return (
      <div id='control'>
        <button className='btn btn-red'>
          <FaTrashAlt /> Clear All
        </button>
        <button className='btn btn-orange'>
          <FaCheck /> Clear Completed
        </button>
      </div>
    )
  }
}

export default Control
