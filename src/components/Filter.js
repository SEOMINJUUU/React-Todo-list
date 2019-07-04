import React from 'react'

function Filter (props) {
  const { id, filter, onClick } = props

  return (
    <li
      id={id}
      className={filter === id ? 'filter-on' : 'filter-off'}
      onClick={() => onClick(id)}
    >
      {id}
    </li>
  )
}

export default Filter
