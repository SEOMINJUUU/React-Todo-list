import React from 'react'
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa'

class Control extends React.Component {
  handleClick = (e) => {
    const { onFilter } = this.props
    const filter = e.target.id
    onFilter(filter)
  }

  render () {
    const { onRemoveAll, onCompleted } = this.props
    const { handleClick } = this
    return (
      <div id='control'>
        <button
          className='btn btn-purple'>
          <FaFilter /> Filter
        </button>
        <ul>
          <li id='all' onClick={handleClick}> All </li>
          <li id='todo' onClick={handleClick}> Todo </li>
          <li id='completed' onClick={handleClick}>Completed</li>
        </ul>
        <button
          className='btn btn-red'
          onClick={onRemoveAll}>
          <FaTrashAlt /> Clear All
        </button>
        <button
          className='btn btn-orange'
          onClick={onCompleted}>
          <FaCheck /> Clear Completed
        </button>
      </div>
    )
  }
}

export default Control
