import React, { Component } from 'react'

class Modal extends Component {

  _resetGame = () => {
      this.props.resetGame()
  }

  render() {
    return <div className="overlay">
      <div className="dialog">
        <h3>Well Done!</h3>
        <button className="endGame" onClick={this._resetGame}>Play Again???</button>
      </div>
    </div>
  }
}

export default Modal;
