import React, { Component } from 'react'
import Buttons from './Buttons'
import prelude from '../public/music/prelude15.mp3'

class Music extends Component {

  playAudio() {
    this.refs.player.play()
  }

  pauseAudio() {
    this.refs.player.pause()
  }

  render () {
    let song = prelude

    return <div>
    <audio ref="player" id="player" autoPlay loop>
        <source src={song} type='audio/mp3' />
      </audio>

      <Buttons playAudio={this.playAudio.bind(this)}
        pauseAudio={this.pauseAudio.bind(this)} />
      </div>
  }
}

export default Music
