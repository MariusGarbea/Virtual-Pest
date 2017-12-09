import React from 'react';

import '../styles/Documentation.css';
import state from '../static/state.png';

const Documentation = () => {
  const petDescription = "Machamp is known to be one of the most powerful pokemons.\
  His ability to handle extremely heavy objects is what definies him.\
  Unfortunately, because he has 4 arms, he is usually not too flexible.\
  I chose Machamp as my pet because he seems like a cool guy and loves training\
  I think we can become great gym buddies! :)";
  const devDescription = "This project uses React and its boilerplate was generated with create-react-app.\
  Thus, it uses Webpack for bundling, Babel for transpiling and Jest for testing.\
  Moreover, I added Redux for state management and Material-UI for the buttons (importing a library only for one component? Awful, I know).\
  In order to fork this project, simply clone it and run npm install in the console to install all dependencies. Run the app by typing npm start.\
  Components are organized in one folder while Views are in other folder. Views represent the pages\
  (in this case the home page and the description page) while Components are intermediary classes used to compose the Views.\
  I have split components into ButtonGroup, which stores the state matrix and handles the state change depending on button clicks,\
  InformationPanel, which displays the state parameters, and Picture, which handles image changes, the setInterval functions and death thresholds.\
  These 3 components compose the home view, while the documentation page is a separate functional stateless component.\
  All 3 copmonents have access to the Redux store but only ButtonGroup and Picture can change the state tree (by change I mean replace the current\
  state with a whole new one everytime, after making the necessary changes; Redux encourages state immutability).";
  const codeDescription = "Because this project is using React and most hosting services do not permit the installation of npm modules, I had to build the project and compile it to vanilla JS. \
  The state is calculated by calling the state matrix, using the button press (action) as the row index and the\
  previous state as the column index. On every click, we increment the variable associated to that button with 1 and change the state according to the matrix.\
  This however does not map to the state. The only relevance those variables in the list have is to check when the pet dies. In order to do this, we store some\
  thresholds in an object in the Picture component. We listen to every state change and check if our pet's state is outside of those thresholds. The thresholds\
  are as follows: satiation: (-3, 3), playfulness: (-6, 6), power: (-5, 10), wakefulness: (-4, 4). In case it is,\
  it dies and we remove all the listeners and prevent the component from re-rendering (React optimization). As previously stated, I also make use of setInterval which\
  generates 4 different timeouts for satiation, playfulness, power and wakefulness. Each of these 4 states decreases according to a fixed time interval, specified in the code.\
  On each update, we also generate a random number between 0 and 1 and distribute the first 0.1 out of 1 to 4 states: happy, sad, hungry and powerful. Thus, the pet has 2% chance of \
  becoming any of the happy, sad or hungry states and a 4% chance of becoming powerful. These state changes happen regardless of user interactions, unless the pet is dead.\
  We do this by checking if the random number is between different intervals: 0 and 0.02, 0.02 and 0.04, 0.04 and 0.06 and 0.06 and 0.1. \
  The following is the finite state machine representation using the matrix.";
  return (
    <div id="doc">
      <h1>Machamp</h1>
      <h3>Pet description</h3>
      <p className="description">{petDescription}</p>
      <h3>Environment description</h3>
      <p className="description">{devDescription}</p>
      <h3>Code description</h3>
      <p className="description">Code can be found here: <a href="https://github.com/MariusGarbea/Virtual-Pest">https://github.com/MariusGarbea/Virtual-Pest</a></p>
      <p className="description">{codeDescription}</p>
      <h3>Finite state machine representation</h3>
      <img id="state" alt="state representation" src={state} />
    </div>
  )
}

export default Documentation;
