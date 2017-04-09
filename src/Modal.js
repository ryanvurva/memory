import React, { Component } from 'react'

class Modal extends Component {

  _click() {
    window.setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  render() {
    return <div className="overlay">
      <div className="dialog">
        <h3>Well Done!</h3>
        <button onClick={this._click}>Play Again???</button>
      </div>
    </div>
  }
}
export default Modal
