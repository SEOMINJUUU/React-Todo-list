import React from 'react'
import Task from './Task'
import { FaPlus } from 'react-icons/fa'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.renderTask = this.renderTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      text: ''
    }
  }

  renderTask () {
    if (this.state.text === '') { return }
    this.props.onChange(<Task text={this.state.text} />)
    this.setState({
      text: ''
    })
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <div id='input'>
        <input
          type='text'
          placeholder='New task'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button className='btn btn-blue' onClick={this.renderTask}><FaPlus /> Add</button>
      </div>
    )
  }
}

export default Input
