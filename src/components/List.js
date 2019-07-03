import React from 'react'
import Task from './Task'

class List extends React.Component {
  render () {
    const { tasks, onRemove, onToggle } = this.props

    const taskList = tasks.map(
      ({ id, text, checked }) => (
        <Task
          id={id}
          text={text}
          onRemove={onRemove}
          onToggle={onToggle}
          checked={checked}
          key={id}
        />
      )
    )

    return (
      <ul id='list'>
        {taskList}
      </ul>
    )
  }
}

export default List
