import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moodDecrease, moodChange } from '../actions/pet';

import '../styles/Picture.css';
import dead from '../static/states/dead.png';
import happy from '../static/states/happy.png';
import hungry from '../static/states/hungry.png';
import playful from '../static/states/playful.png';
import powerful from '../static/states/powerful.png';
import sad from '../static/states/sad.png';
import sleepy from '../static/states/sleepy.png';
import studious from '../static/states/studious.png';

// mapping state to images
const images = {
  'dead': dead,
  'happy': happy,
  'hungry': hungry,
  'playful': playful,
  'powerful': powerful,
  'sad': sad,
  'sleepy': sleepy,
  'studious': studious
};

// thresholds for death
const thresholds = {
  satiation: [-3, 3],
  playfulness: [-6, 6],
  power: [-5, 10],
  wakefulness: [-4, 4]
};

class Picture extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.mood === 'dead') {
      this.removeIntervalListeners();
      return false;
    }
    return true;
  }
  removeIntervalListeners = () => {
    clearInterval(this.satiationFunc);
    clearInterval(this.playfulnessFunc);
    clearInterval(this.powerFunc);
    clearInterval(this.wakefulnessFunc);
  }
  componentDidMount() {
    const { decreaseMood } = this.props;
    this.satiationFunc = setInterval(() => {
      decreaseMood('satiation');
    }, 5000);
    this.playfulnessFunc = setInterval(() => {
      decreaseMood('playfulness');
    }, 7000);
    this.powerFunc = setInterval(() => {
      decreaseMood('power');
    }, 6000);
    this.wakefulnessFunc = setInterval(() => {
      decreaseMood('wakefulness');
    }, 4000);
  }
  componentDidUpdate() {
    const { changeMood } = this.props;
    let rand = Math.random();
    if(rand >= 0 && rand <= 0.02) {
      changeMood('happy');
    } else if(rand > 0.02 && rand <= 0.04) {
      changeMood('sad');
    } else if(rand > 0.04 && rand <= 0.06) {
      changeMood('hungry');
    } else if(rand > 0.06 && rand <= 0.1) {
      changeMood('powerful');
    }
    for(let i in thresholds) {
      if(this.props[i] <= thresholds[i][0] || this.props[i] >= thresholds[i][1]) {
        changeMood('dead');
      }
    }
  }
  componentWillUnmount() {
    this.removeIntervalListeners();
  }
  render() {
    const { mood } = this.props;
    let moodImg = images[mood];
    return (
      <img
        id="pic"
        alt="animal"
        src={moodImg}
      />
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

const mapDispatchToProps = dispatch => {
  return {
    decreaseMood: mood => {
      dispatch(moodDecrease(mood));
    },
    changeMood: mood => {
      dispatch(moodChange(mood));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
