import React, { Component } from 'react'
import Card from './Card'

class Gameboard extends Component {

 state = {
  moves: ['bomb', 'bullet', 'fighter', 'cruiser', 'gas-mask', 'grenade', 'gun', 'launcher', 'machine-gun', 'tank', 'bomb', 'bullet', 'fighter', 'cruiser', 'gas-mask', 'grenade', 'gun', 'launcher', 'machine-gun', 'tank'],
  picks: []
  }

  flipCard = (flip) => {
    this.setState({
      picks: [...this.state.picks, flip],
    })
  }

  toggleRevealed = (index) => {
    const flips = this.state.moves.slice()
    flips[index] = !flips[index]
    this.setState({ moves: flips })
  }

  render () {

    return (
      <div className="Gameboard">
      <Card index={0} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[0]} revealed={this.state.picks.includes(0)} />
      <Card index={1} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[1]} revealed={this.state.picks.includes(1)} />
      <Card index={2} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[2]} revealed={this.state.picks.includes(2)} />
      <Card index={3} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[3]} revealed={this.state.picks.includes(3)} />
      <Card index={4} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[4]} revealed={this.state.picks.includes(4)} />
      <Card index={5} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[5]} revealed={this.state.picks.includes(5)} />
      <Card index={6} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[6]} revealed={this.state.picks.includes(6)} />
      <Card index={7} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[7]} revealed={this.state.picks.includes(7)} />
      <Card index={8} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[8]} revealed={this.state.picks.includes(8)} />
      <Card index={9} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[9]} revealed={this.state.picks.includes(9)} />
      <Card index={10} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[10]} revealed={this.state.picks.includes(10)} />
      <Card index={11} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[11]} revealed={this.state.picks.includes(11)} />
      <Card index={12} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[12]} revealed={this.state.picks.includes(12)} />
      <Card index={13} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[13]} revealed={this.state.picks.includes(13)} />
      <Card index={14} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[14]} revealed={this.state.picks.includes(14)} />
      <Card index={15} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[15]} revealed={this.state.picks.includes(15)} />
      <Card index={16} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[16]} revealed={this.state.picks.includes(16)} />
      <Card index={17} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[17]} revealed={this.state.picks.includes(17)} />
      <Card index={18} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[18]} revealed={this.state.picks.includes(18)} />
      <Card index={19} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[19]} revealed={this.state.picks.includes(19)} />
    </div>)
  }
}
export default Gameboard
