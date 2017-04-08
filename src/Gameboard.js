import React, { Component } from 'react'
import Card from './Card'
import Modal from './Modal';

class Gameboard extends Component {

  state = {
    cards: ['bomb', 'bullet', 'fighter', 'cruiser', 'gas-mask', 'grenade', 'gun', 'launcher', 'machine-gun', 'tank', 'bomb', 'bullet', 'fighter', 'cruiser', 'gas-mask', 'grenade', 'gun', 'launcher', 'machine-gun', 'tank'],
    picks: [],
    matches: [],
    gameOver: false
  }

  flipCard = (flip) => {
    if (this.state.picks.includes(flip)) return
    if (this.state.picks.length < 2) {
      this.setState({
        picks: [...this.state.picks, flip]
      }, () => {
        if (this.state.picks.length === 2) {
          this.checkForMatch()
        }
      })
    }
  }

  checkForMatch = (i) => {
    if (this.state.cards[this.state.picks[0]] === this.state.cards[this.state.picks[1]]) {
      this.setState({
        matches: [...this.state.matches, ...this.state.picks]
      }, () => {
        if (this.state.matches.length === this.state.cards.length) {
          window.setTimeout(() => {
            this.setState({
              picks: [],
              matches: [],
              gameOver: true
            })
          }, 500)
        }
      })
    }
    window.setTimeout(() => {
      this.setState({
        picks: []
      })
    }, 500)
  }

  render () {
    if (this.state.gameOver) {
      return <Modal />
    } else {
    return (
      <div className="Gameboard">
      <Card index={0} flipCard={this.flipCard} value={this.state.cards[0]} revealed={this.state.picks.includes(0)} matches={this.state.matches.includes(0)} />
      <Card index={1} flipCard={this.flipCard} value={this.state.cards[1]} revealed={this.state.picks.includes(1)} matches={this.state.matches.includes(1)} />
      <Card index={2} flipCard={this.flipCard} value={this.state.cards[2]} revealed={this.state.picks.includes(2)} matches={this.state.matches.includes(2)} />
      <Card index={3} flipCard={this.flipCard} value={this.state.cards[3]} revealed={this.state.picks.includes(3)} matches={this.state.matches.includes(3)} />
      <Card index={4} flipCard={this.flipCard} value={this.state.cards[4]} revealed={this.state.picks.includes(4)} matches={this.state.matches.includes(4)} />
      <Card index={5} flipCard={this.flipCard} value={this.state.cards[5]} revealed={this.state.picks.includes(5)} matches={this.state.matches.includes(5)} />
      <Card index={6} flipCard={this.flipCard} value={this.state.cards[6]} revealed={this.state.picks.includes(6)} matches={this.state.matches.includes(6)} />
      <Card index={7} flipCard={this.flipCard} value={this.state.cards[7]} revealed={this.state.picks.includes(7)} matches={this.state.matches.includes(7)} />
      <Card index={8} flipCard={this.flipCard} value={this.state.cards[8]} revealed={this.state.picks.includes(8)} matches={this.state.matches.includes(8)} />
      <Card index={9} flipCard={this.flipCard} value={this.state.cards[9]} revealed={this.state.picks.includes(9)} matches={this.state.matches.includes(9)} />
      <Card index={10} flipCard={this.flipCard} value={this.state.cards[10]} revealed={this.state.picks.includes(10)} matches={this.state.matches.includes(10)} />
      <Card index={11} flipCard={this.flipCard} value={this.state.cards[11]} revealed={this.state.picks.includes(11)} matches={this.state.matches.includes(11)} />
      <Card index={12} flipCard={this.flipCard} value={this.state.cards[12]} revealed={this.state.picks.includes(12)} matches={this.state.matches.includes(12)} />
      <Card index={13} flipCard={this.flipCard} value={this.state.cards[13]} revealed={this.state.picks.includes(13)} matches={this.state.matches.includes(13)} />
      <Card index={14} flipCard={this.flipCard} value={this.state.cards[14]} revealed={this.state.picks.includes(14)} matches={this.state.matches.includes(14)} />
      <Card index={15} flipCard={this.flipCard} value={this.state.cards[15]} revealed={this.state.picks.includes(15)} matches={this.state.matches.includes(15)} />
      <Card index={16} flipCard={this.flipCard} value={this.state.cards[16]} revealed={this.state.picks.includes(16)} matches={this.state.matches.includes(16)} />
      <Card index={17} flipCard={this.flipCard} value={this.state.cards[17]} revealed={this.state.picks.includes(17)} matches={this.state.matches.includes(17)} />
      <Card index={18} flipCard={this.flipCard} value={this.state.cards[18]} revealed={this.state.picks.includes(18)} matches={this.state.matches.includes(18)} />
      <Card index={19} flipCard={this.flipCard} value={this.state.cards[19]} revealed={this.state.picks.includes(19)} matches={this.state.matches.includes(19)} />
    </div>)
  }
  }
}
export default Gameboard
