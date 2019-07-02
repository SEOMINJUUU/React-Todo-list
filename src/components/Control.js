import React from 'react'
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa'

class Control extends React.Component {
  render () {
    return (
      <div id='control'>
        /* 필터링 버튼 */
        <button><FaFilter /> Filter</button>
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
