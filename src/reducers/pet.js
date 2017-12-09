// state tree
const petInitialState = {
  currentMood: 'happy',
  satiation: 0,
  playfulness: 0,
  wakefulness: 0,
  studiousness: 0,
  power: 0
};

const petReducer = (state = petInitialState, action) => {
  switch(action.type) {
  case 'MOOD_INCREASE':
    return {
      ...state,
      [action.mood]: state[action.mood] + 1
    };
  case 'MOOD_DECREASE':
    return {
      ...state,
      [action.mood]: state[action.mood] - 1
    };
  case 'MOOD_CHANGE':
    return {
      ...state,
      currentMood: action.mood
    };
  default:
    return state;
  }
};

export default petReducer;
