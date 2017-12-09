import React from 'react';
import { Route } from 'react-router';

import './styles/App.css';
import Documentation from './Views/Documentation';
import Pet from './Views/Pet';

const App = () => {
  return (
    <main id="app">
      <Route path="/" exact component={Pet} />
      <Route path="/documentation" component={Documentation} />
    </main>
  )
}

export default App;
