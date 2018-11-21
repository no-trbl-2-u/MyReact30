import React, { Component } from 'react';
import DrumPad from './DrumPad/DrumPad';

class DrumSet extends Component {

  componentDidMount() {
    document.addEventListener('keydown', event => {
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
      if(!audio) return;
      audio.play();
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