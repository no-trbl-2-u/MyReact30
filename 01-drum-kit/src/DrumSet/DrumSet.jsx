import React, { Component } from 'react';
import DrumPad from './DrumPad/DrumPad';

class DrumSet extends Component {

  componentDidMount() {
    document.addEventListener('keydown', event => {
      // Isolate the specific audio tag via a 
      // dynamic reference to the 'data-key'
      let key = document.querySelector(`.key[data-key="${event.keyCode}"`)
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
      if(!audio) return; // Null any keys w/o sound

      // Handle Class Changing
      key.className = 'key playing'
      
      setTimeout(() => {
        key.className = 'key' // Turn off 'playing' class
      }, 100);

      // Handle Audio
      audio.currentTime = 0; // Rewind to start of sample
      audio.play(); // Play the .wav file associated w/ key
    })
  }

  render() { 
    return (
      <div className="keys-container">

      { this.props.keyData.map((each, index) => (
        <div className='eachPad' key={ index }>

          <DrumPad
            dataKey={ each.dataKey }
            kbdKey={ each.kbdKey }
            sound={ each.sound }
          />

          <audio
            data-key={ each.dataKey }
            src={ each.source }
          />
        </div>
      )) }
      
      </div>
    );
  }
}
 
export default DrumSet;