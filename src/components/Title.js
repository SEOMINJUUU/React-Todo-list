import React from 'react'

class Title extends React.Component {
  render () {
    return (
      <div id='title'>
        <span className='h1'>Tasks </span>
        ({this.props.leftTask})
      </div>
    )
  }
}

export default Title
