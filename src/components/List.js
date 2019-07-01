import React from 'react'

class List extends React.Component {
  render () {
    const tasks = this.props.tasks

    return (
      <ul id='list'>
        {tasks}
      </ul>
    )
  }
}

export default List
