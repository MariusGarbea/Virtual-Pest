const moodIncrease = mood => ({
  type: 'MOOD_INCREASE',
  mood
});

const moodDecrease = mood => ({
  type: 'MOOD_DECREASE',
  mood
});

const moodChange = mood => ({
  type: 'MOOD_CHANGE',
  mood
});

export { moodIncrease, moodDecrease, moodChange };
