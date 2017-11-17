import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var chordMap = {
  1: [1,3,5],
  2: [3,5],
  3: [1,7],
  4: [3,4],
  5: [2,3],
  6: [3,6],
  7: [4,7]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
