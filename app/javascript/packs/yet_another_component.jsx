import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class YetAnotherComponent extends React.Component {
  render() {
    return (
      <div className='trolololol'>Mon was here!</div>
    )
  }
}

ReactDOM.render(<YetAnotherComponent />, document.getElementById('root'))
