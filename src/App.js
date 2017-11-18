import React, { Component } from 'react';
import './App.css';

var chordMap = {
  1: ['1','3','5'],
  2: ['3','5'],
  3: ['1','7'],
  4: ['3','4'],
  5: ['2','3'],
  6: ['3','6'],
  7: ['4','7']
}

function convertNumToRoman(num) {

  var romanNum;
  num = Number(num);

  switch(num) {
    case 1:
      romanNum = 'I';
      break;
    case 2:
      romanNum = 'ii';
      break;
    case 3:
      romanNum = 'iii';
      break;
    case 4:
      romanNum = 'IV';
      break;
    case 5:
      romanNum = 'V';
      break;
    case 6:
      romanNum = 'vi';
      break;
    case 7:
      romanNum = 'vii°';
      break;
    default:
      romanNum = '?';
      break;
  }

  return romanNum;

}

class CurrentChord extends Component {

  render() {
    return(

      <button className="btn btn-primary btn-lrg"><h1>{convertNumToRoman(this.props.currentChordValue)}</h1></button>
    )
  }

}

class SuggestedChords extends Component {

  render() {
    return(
      this.props.suggestedChords.map((chord,i) =>
        <button className="btn btn-default btn-lrg" key={i}><h1>{convertNumToRoman(this.props.suggestedChords[i])}</h1></button>
      )
    )
  }

}

class App extends Component {

  constructor(props){

    super(props);
    this.state = {
      currentChordValue: '5',
      suggestedChords: ['2','3']
    }

    this.convertNumToRoman = convertNumToRoman.bind(this);
    // this.selectThisChord = selectThisChord.bind(this);

  }

  selectThisChord() {
    console.log(123);
  }

  // selectThisChord(e,chord) {
  //   e.preventDefault();
  //   this.setState({
  //     suggestedChords: chordMap[chord]
  //   });
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-push-4 text-center">
            <p>The current chord is</p>
            <CurrentChord currentChordValue={this.state.currentChordValue} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-push-4 text-center">
            <p>You might want to consider using one of these chords next</p>
            <SuggestedChords suggestedChords={this.state.suggestedChords} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
