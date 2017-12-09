import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../styles/Pet.css';
import ButtonGroup from '../Components/ButtonGroup';
import Picture from '../Components/Picture';
import InformationPanel from '../Components/InformationPanel';

class Pet extends Component {
  render() {
    return (
      <div id="pet">
        <div id="info">
          <InformationPanel />
          <Picture />
        </div>
        <ButtonGroup />
        <Link to="/documentation">Link to documentation</Link>
      </div>
    );
  }
}

export default Pet;
