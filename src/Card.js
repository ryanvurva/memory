import React, { Component } from 'react'

class Card extends Component {

  _click = () => {
    this.props.flipCard(this.props.index)
    console.log('you clicked me')
}

  render() {
    const revealed = this.props.revealed ? 'revealed' : ''
    return <div id="card" className={`${this.props.value} back ${revealed}`} onClick={this._click}></div>
  }
}
export default Card
