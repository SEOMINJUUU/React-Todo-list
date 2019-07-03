import React from 'react'
import Task from './Task'

class List extends React.Component {
  render () {
    const { tasks, filter, onRemove, onToggle } = this.props
    
    const filteredTask = tasks.filter(task => {
      switch (filter) {
        case 'todo':
          return task.checked === false
        case 'completed':
          return task.checked === true
        default:
          return task
      }
    })
    const taskList = filteredTask.map(
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

