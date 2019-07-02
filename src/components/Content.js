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
    this.handleRemove = this.handleRemove.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  id = 0    // 왜 안에 선언하면 안될까
  handleChange (text) {
    const tasks = this.state.tasks
    this.setState({
      tasks: tasks.concat({ id: this.id++, text: text, checked: false })
    })
    this.props.onChange(tasks.length+1)
  }

  handleRemove (id) {
    const { tasks }= this.state
    this.props.onChange(tasks.length-1) // 왜 -1 ?
    this.setState({ tasks: tasks.filter(task => id !== task.id)})
    }
  
    handleToggle (id) {
    const {tasks} = this.state

    const index = tasks.findIndex(task => task.id === id)
    const tmp = [...tasks]
    
    tmp[index] = {
      ...tasks[index],
      checked: !tasks[index].checked
    }

    this.setState({
      tasks: tmp
    })
  }

  render () {
    return (
      <div>
        <Input onChange={this.handleChange} />
        <Control /* onClick={} */ />
        <List 
          tasks={this.state.tasks} 
          onRemove={this.handleRemove} 
          onToggle={this.handleToggle}/>
      </div>
    )
  }
}

export default Content
