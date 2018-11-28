import React, { Component } from 'react';

import './CSSVariables.css';

class CSSVariables extends Component {
  componentDidMount() {
    const controls = document.querySelectorAll('.controls input');
    console.log(controls)
  }
  render() {
    return (
      <div className="CSSVariables-container">

        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

        {/* You will likely need to set all the onChange stuff for these input Handlers */}
        {/* You will also likely need to create a component for each of these */}
        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />

          <label htmlFor="blur">Blur:</label>
          <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px" />

          <label htmlFor="base">Base Color</label>
          <input id="base" type="color" name="base" value="#ffc600" />
        </div>

        <img className="city" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="city" />

      </div>
    );
  }
}

export default CSSVariables;
