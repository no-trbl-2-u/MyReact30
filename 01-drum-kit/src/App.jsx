import React, { Component } from 'react';

import DrumSet from './DrumSet/DrumSet'
import keyData from './DrumSet/keyData'

import './App.css'

class App extends Component {
  // All the data for each key
  state = {
    keyData,
  }
  
  render() {
    // Destructured data for each key
    const { keyData } = this.state
    return (
      <div>
        <DrumSet 
          keyData= { keyData }
        />
      </div>
    );
  }
}

export default App;