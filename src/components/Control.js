import React from 'react'
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa'

class Control extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: 'all',
      hidden: true
    }
  }

  handleClick = (e) => {
    const { onFilter } = this.props

    onFilter(e.target.id)
    this.setState({
      filter: e.target.id
    })
  }

  render () {
    const { filter, hidden } = this.state
    const { onRemoveAll, onCompleted } = this.props
    const { handleClick } = this

    return (
      <div id='control'>
        <button
          className='btn btn-purple'
          onClick={() => this.setState(prevState => ({
            hidden: !prevState.hidden
          }))}>
          <FaFilter /> Filter
        </button>

        <ul className={hidden ? 'hide' : 'show-inline-block'}>
          <li
            id='all'
            className={filter === 'all' ? 'filter-on' : 'filter-off'}
            onClick={handleClick}> All </li>
          <li
            id='todo'
            className={filter === 'todo' ? 'filter-on' : 'filter-off'}
            onClick={handleClick}> Todo </li>
          <li
            id='completed'
            className={filter === 'completed' ? 'filter-on' : 'filter-off'}
            onClick={handleClick}>Completed</li>
        </ul>

        <button
          className='btn btn-red'
          onClick={onRemoveAll}>
          <FaTrashAlt /> Clear All
        </button>

        <button
          className='btn btn-orange'
          onClick={onCompleted}>
          <FaCheck /> Clear Completed
        </button>
      </div>
    )
  }
}

export default Control
