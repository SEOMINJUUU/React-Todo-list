import React from 'react'
import './App.css'
import Title from './components/Title'
import Content from './components/Content.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      leftTasks: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    document.title = 'Todo-list'
  }

  handleChange (num) {
    this.setState({
      leftTasks: num + 1
    })
  }

  render () {
    return (
      <div className='App'>
        <Title leftTask={this.state.leftTasks} />
        <Content onChange={this.handleChange} />
      </div>
    )
  }
}

export default App
