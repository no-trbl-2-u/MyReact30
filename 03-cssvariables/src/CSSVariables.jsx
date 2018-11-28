import React, { Component } from 'react';

import './CSSVariables.css';

import './Components/SpaceInput'
// import SpaceInput from './Components/SpaceInput';

class CSSVariables extends Component {
  constructor() {
    super();
    this.state = {
      spaceVal : 0,
      blurVal : 0,
      colorVal : 0
    }
  }

  handleSpaceChange(event) {
    this.setState({
      spaceVal : event.target.value,
    })
  }

  componentDidMount() {
    const controls = document.querySelectorAll('.controls input');
  }

  render() {
    const { spaceVal } = this.state;
    return (
      <div className="CSSVariables-container">

        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

        <div className="controls">

          <label htmlFor="spacing">Spacing:</label>
          <input id="spacing" type="range" name="spacing" 
            min="10" max="200" value={`"${ spaceVal }"`} 
            data-sizing="px" onChange={this.handleSpaceChange}
          />


          {/* <label htmlFor="blur">Blur:</label>
          <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px" />

          <label htmlFor="base">Base Color</label>
          <input id="base" type="color" name="base" value="#ffc600" /> */}
        
        </div>

        <img className="city" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="city" />

      </div>
    );
  }
}

export default CSSVariables;
