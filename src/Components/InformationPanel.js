import React, { Component } from 'react';
import { connect } from 'react-redux';

class InformationPanel extends Component {
  shouldComponentUpdate() {
    const { mood } = this.props;
    return mood !== 'dead' && mood !== undefined;
  }
  render() {
    const { mood, satiation, playfulness, power, wakefulness, studiousness } = this.props;
    return (
      <div>
        <p>current mood: {mood}</p>
        <p>satiation: {satiation}</p>
        <p>playfulness: {playfulness}</p>
        <p>power: {power}</p>
        <p>wakefulness: {wakefulness}</p>
        <p>studiousness: {studiousness}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mood: state.currentMood,
    satiation: state.satiation,
    playfulness: state.playfulness,
    power: state.power,
    wakefulness: state.wakefulness,
    studiousness: state.studiousness
  };
};

export default connect(mapStateToProps)(InformationPanel);
