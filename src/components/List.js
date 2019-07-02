import React from 'react'
import Task from './Task'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskList: []
    }
  }

  render () {
    const { tasks, onRemove, onToggle } = this.props

    this.state.taskList = tasks.map(
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
        {this.state.taskList}
      </ul>
    )
  }
}

export default List
