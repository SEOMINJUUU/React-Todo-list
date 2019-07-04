import React from 'react'
import Filter from './Filter'
import { FaFilter, FaTrashAlt, FaCheck } from 'react-icons/fa'

class Control extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: 'all',
      hidden: true
    }
  }

  handleHide = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }
  
  handleClick = (id) => {
    const { onFilter } = this.props

    onFilter(id)
    this.setState({
      filter: id
    })
  }

  render () {
    const { filter, hidden } = this.state
    const { onRemoveAll, onCompleted } = this.props
    const { handleHide, handleClick } = this

    return (
      <div id='control'>
        <button
          className='btn btn-purple'
          onClick={handleHide}>
          <FaFilter /> Filter
        </button>

        <ul className={hidden ? 'hide' : 'show-inline-block'}>
          <Filter id='all' filter={filter} onClick={handleClick} />
          <Filter id='todo' filter={filter} onClick={handleClick} />
          <Filter id='completed' filter={filter} onClick={handleClick} />
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
