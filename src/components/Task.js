import React from 'react'
import { FaTimes } from 'react-icons/fa'

class Task extends React.Component {
  render () {
    return (
      <li>
        {this.props.text}
        <button
          className='btn btn-red delete'
          onClick={this.props.onRemove}>
          <FaTimes /> </button>
      </li>
    )
  }
}

export default Task
