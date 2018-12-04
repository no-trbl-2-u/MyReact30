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
      colorVal : '#ffffff',
      rotateVal: 0,
    }

    this.handleSpaceChange = this.handleSpaceChange.bind(this);
    this.handleBlurChange = this.handleBlurChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleRotateChange = this.handleRotateChange.bind(this);
  }

  handleSpaceChange(event) {
    this.setState({
      spaceVal: event.target.value,
    })
  }

  handleBlurChange(event) {
    this.setState({
      blurVal: event.target.value,
    })
  }

  handleColorChange(event) {
    this.setState({
      colorVal: event.target.value,
    })
  }

  handleRotateChange(event) {
    this.setState({
      rotateVal: event.target.value
    })
  }

  componentDidMount() {
    const controls = document.querySelectorAll('.controls input');

    // FOR DEBUGGING
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
    }

    controls.forEach(input => {
      input.addEventListener('change', handleUpdate)
    });    
    controls.forEach(input => {
      input.addEventListener('mousemove', handleUpdate)
    });

  }

  render() {

    // DESTRUCTURING 
    const { spaceVal, blurVal, colorVal, rotateVal } = this.state;
    const { handleSpaceChange, handleBlurChange, handleColorChange, handleRotateChange } = this

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
            id="base" name="base"
            type="color"
            value={ colorVal }
            onChange={ handleColorChange }
          />

          <label htmlFor="rotate">Rotate:</label>
          <input 
            id="rotate" name="rotate"
            type="range" 
            data-sizing="deg"
            min="0" max="360"
            value={ rotateVal }
            onChange={ handleRotateChange }
          />
        </div>

        <img className="randomImg" src="https://picsum.photos/800/500/?random" alt="city" />

      </div>
    );
  }
}

export default CSSVariables;
