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

      <button class="btn btn-primary btn-lrg"><h1>{this.convertNumToRoman(this.state.currentChordValue)}</h1></button>
    )
  }

}

class SuggestedChords extends Component {
  constructor(props){
    super(props);
    this.state = {
      suggestedChords: [2,3]
    }

  }

  render() {
    return(<span>
      {this.state.suggestedChords.map((chord,i) =>
        <button class="btn btn-default btn-lrg"><h1>{this.state.suggestedChords[i]}</h1></button>
      )}
      </span>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-push-4 text-center">
            <p>The current chord is</p>
            <CurrentChord />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-push-4 text-center">
            <p>You might want to consider using one of these chords next</p>
            <SuggestedChords />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
