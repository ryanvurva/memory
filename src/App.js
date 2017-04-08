import React, { Component } from 'react';
import Gameboard from './Gameboard';
// import Modal from './Modal';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
          <h1>A Game of Memory</h1>
        <div className="Playarea">
          <Gameboard />
        </div>
      </div>

    );
  }
}

export default App;
