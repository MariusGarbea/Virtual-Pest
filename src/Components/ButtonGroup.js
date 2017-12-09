import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { moodIncrease, moodChange } from '../actions/pet';

import '../styles/ButtonGroup.css';

const states = ["happy", "sad", "hungry", "playful", "powerful", "sleepy", "studious", "dead"];

// mapping previous state and action to next state
const stateMatrix = [
  [states[0], states[1], states[2], states[1], states[4], states[4], states[6]],
  [states[4], states[0], states[0], states[5], states[4], states[5], states[6]],
  [states[3], states[0], states[2], states[3], states[1], states[1], states[1]],
  [states[6], states[1], states[2], states[1], states[1], states[1], states[6]],
  [states[4], states[4], states[2], states[4], states[4], states[5], states[1]]
];

class ButtonGroup extends Component {
  render() {
    const { currentMood, increaseMood } = this.props;
    let currentMoodIndex = states.indexOf(currentMood);
    return (
      <MuiThemeProvider>
        <div id="buttonGroup">
          <RaisedButton onClick={() => increaseMood('wakefulness', 0, currentMoodIndex)}>Sleep</RaisedButton>
          <RaisedButton onClick={() => increaseMood('satiation', 1, currentMoodIndex)}>Eat</RaisedButton>
          <RaisedButton onClick={() => increaseMood('playfulness', 2, currentMoodIndex)}>Play</RaisedButton>
          <RaisedButton onClick={() => increaseMood('studiousness', 3, currentMoodIndex)}>Study</RaisedButton>
          <RaisedButton onClick={() => increaseMood('power', 4, currentMoodIndex)}>Lift Weights</RaisedButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentMood: state.currentMood
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseMood: (mood, actionNumber, currentMoodIndex) => {
      dispatch(moodIncrease(mood));
      dispatch(moodChange(stateMatrix[actionNumber][currentMoodIndex]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);
