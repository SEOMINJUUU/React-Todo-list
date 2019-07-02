import React from 'react'
import { FaPlus } from 'react-icons/fa'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.renderTask = this.renderTask.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = {
      text: ''
    }
  }

  renderTask () {
    if (this.state.text === '') { return }
    this.props.onChange(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') { this.renderTask() }
  }

  render () {
    return (
      <div id='input'>
        <input
          type='text'
          placeholder='New task'
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          onKeyPress={this.handleKeyPress}
        />
        <button
          className='btn btn-blue'
          onClick={this.renderTask}>
          <FaPlus /> Add
        </button>
      </div>
    )
  }
}

export default Input
