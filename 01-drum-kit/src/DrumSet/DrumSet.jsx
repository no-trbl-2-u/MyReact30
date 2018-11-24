import React, { Component } from 'react';
import DrumPad from './DrumPad/DrumPad';

class DrumSet extends Component {

  constructor() {
    super();
    this.handleAudioKBD = this.handleAudioKBD.bind(this);
    this.handleAudioClick = this.handleAudioClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  handleAudioKBD(event) {
    // Isolate each pad via the keyboard KeyCode
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    if(!audio) return; // Null any keys w/o sound

    this.handleClassNames(key);
    this.playAudio(audio);
  }

  handleAudioClick(event) {
    // const key = document.querySelector(`.key[data-key="${event.target}]`)
    const target = event.target
    console.log(target);
    if(target === 'div'){
      // const dataKey = event.target.getAttribute('data-key')
      // const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
      // this.playAudio(audio);
    }
  }

  playAudio(audio) {
    audio.currentTime = 0; // Rewind to start of sample
    audio.play(); // Play the .wav file associated w/ key
  }

  handleClassNames(key) {
    key.className = 'key playing';                         // ADD
    setTimeout(() => key.classList.remove('playing'), 100) // REMOVE
  }


  componentDidMount() {
    const keys = document.querySelectorAll('.eachPad');

    // Handle Keyboard
    document.addEventListener('keydown', event => {
      this.handleAudioKBD(event);
    })

    // Handle Clicking
    keys.forEach(key => key.addEventListener('click', event => {
      this.handleAudioClick(event);
    }))

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
            clickable='true'
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