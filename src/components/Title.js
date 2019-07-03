import React from 'react'

class Title extends React.Component {
  render () {
    const { leftTask } = this.props
    return (
      <div id='title'>
        <span className='h1'>Tasks </span>
        ({leftTask})
      </div>
    )
  }
}

export default Title
