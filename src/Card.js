import React, { Component } from 'react'

class Card extends Component {

  _click = () => {
    this.props.flipCard(this.props.index)
    // this.props.checkForMatch(this.props.index)
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
//   <div class="flipper">
//     <div class="top"></div>
//     <div class="revealed"></div>
//   </div>
// </div>
