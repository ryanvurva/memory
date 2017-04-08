import React, { Component } from 'react'

class Modal extends Component {

  clicked = () => {
    window.setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  render() {
    return <div className="overlay">
      <div className="dialog">
        <h3>Well Done!</h3>
        <button onClick={ this.clicked }>Play Again???</button>
      </div>
    </div>
  }
}
export default Modal
