import React, { Component } from 'react'

class Card extends Component {

  _click = () => {
    this.props.flipCard(this.props.index)
}

  render() {
    const matches = this.props.matches ? 'matched' : ''
    const revealed = this.props.revealed ? 'revealed' : ''
    return <div id="card"><div className={`${this.props.value} top ${revealed} ${matches}`} onClick={this._click}></div></div>
  }
}
export default Card
//
// <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
//   <div id="card">
//    <div className={`${this.props.value} top ${revealed} ${matches}`} onClick={this._click}></div>
//     <div className="revealed"></div>
//   </div>
// </div>
