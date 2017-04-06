import React, { Component } from 'react';
import Gameboard from './Gameboard';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>A Game of Memory</h1>
        </div>
        <div className="Playarea">
          <Gameboard />
        </div>
      </div>

    );
  }
}

export default App;
