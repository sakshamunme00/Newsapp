import React, { Component } from 'react'
import loading from './Fidget-spinner.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="laoding" />
      </div>
    )
  }
}

export default spinner
