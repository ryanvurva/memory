import React, { Component } from 'react'

class Buttons extends Component {


  render() {
    return (
      <div className="audioButtons">
        <button className="playButton" onClick={this.props.playAudio}><img src='https://cdn1.iconfinder.com/data/icons/material-audio-video/20/play-circle-outline-128.png' width="25px" /></button>
        <button className="pauseButton" onClick={this.props.pauseAudio}><img src='https://cdn1.iconfinder.com/data/icons/material-audio-video/20/pause-circle-outline-128.png' width="25px" /></button>
      </div>
    )
  }
}

export default Buttons
