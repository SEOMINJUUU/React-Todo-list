import React from 'react'
import Input from './Input'
import Control from './Control'
import List from './List'

class Content extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (t) {
    const tasks = this.state.tasks
    this.setState({
      tasks: tasks.concat(t)
    })
    this.props.onChange(tasks.length)
  }

  render () {
    return (
      <div>
        <Input onChange={this.handleChange} />
        <Control /* onClick={} */ />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}

export default Content
