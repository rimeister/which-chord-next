import React, { Component } from 'react';
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

class CurrentChord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentChordValue: '5'
    }
  }

  convertNumToRoman(num) {

    var romanNum;

    switch(num) {
      default:
        romanNum = this.state.currentChordValue;
        break;
      case '1':
        romanNum = 'I';
        break;
      case '2':
        romanNum = 'ii';
        break;
      case '3':
        romanNum = 'iii';
        break;
      case '4':
        romanNum = 'IV';
        break;
      case '5':
        romanNum = 'V';
        break;
      case '6':
        romanNum = 'vi';
        break;
      case '7':
        romanNum = 'vii°';
        break;
    }

    return romanNum;

  }


  render() {
    return(
      <div className="row">
        <div className="col-sm-4 col-sm-push-4 text-center">
          <button class="btn btn-primary btn-lrg">{this.convertNumToRoman(this.state.currentChordValue)}</button>
        </div>
      </div>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="container">
        <CurrentChord />
      </div>
    );
  }
}

export default App;
