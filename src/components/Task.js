import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task (props) {
  const { id, text, checked, onToggle, onRemove } = props

  return (
    <li
      className={checked ? 'completed-list' : ''}
      onClick={() => onToggle(id)}>
      {text}
      <button
        className='btn btn-red delete'
        onClick={(e) => {
          e.stopPropagation()
          onRemove(id)
        }
        }><FaTimes /></button>
    </li>
  )
}

export default Task
