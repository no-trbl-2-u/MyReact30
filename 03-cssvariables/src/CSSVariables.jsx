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

    this.handleSpaceChange = this.handleSpaceChange.bind(this);
    this.handleBlurChange = this.handleBlurChange.bind(this);
  }

  handleSpaceChange(event) {
    this.setState({
      spaceVal : event.target.value,
    })
  }

  handleBlurChange(event) {
    this.setState({
      blurVal : event.target.value,
    })
  }

  componentDidMount() {
    const controls = document.querySelectorAll('.controls input');

    function handleUpdate() {
      console.log(this.value);
    }

    controls.forEach(input => {
      input.addEventListener('change', handleUpdate)
    });

  }

  render() {
    const { spaceVal, blurVal } = this.state;
    const { handleSpaceChange, handleBlurChange } = this
    return (
      <div className="CSSVariables-container">

        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

        <div className="controls">

          <label htmlFor="spacing">Spacing:</label>
          <input 
            id="spacing" name="spacing"
            type="range" 
            data-sizing="px"
            min="10" max="200" 
            value={ spaceVal }
            onChange={ handleSpaceChange }
          />

          <label htmlFor="blur">Blur:</label>
          <input 
            id="blur" name="blur"
            type="range" 
            data-sizing="px"
            min="0" max="25"
            value={ blurVal }
            onChange={ handleBlurChange }
          />

          <label htmlFor="base">Base Color</label>
          <input 
            id="base" type="color"
            name="base" value="#ffc600"
          />
        </div>

        <img className="city" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="city" />

      </div>
    );
  }
}

export default CSSVariables;
