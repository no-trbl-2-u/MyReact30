import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      now: new Date(),
      seconds: this.state.now.getSeconds(),
      secondsDegrees : ((this.state.seconds / 60) * 360),
      secondHand: document.querySelector('.second-Hand'),
    }
  }

  componentDidMount() {
    const setDate = () => {
      console.log(this.state.now);
      console.log(this.state.seconds);
      console.log(this.state.secondsDegrees);
      console.log(this.state.secondHand);
    }

    const interval = setInterval(setDate, 1000)

    document.addEventListener('keydown', event => {
      if(event.keyCode === 27 || event.keyCode === 32){
        clearInterval(interval)
        console.log('Interval Cleared')
      }
    })
  }


  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand second-hand"></div>
        </div>
      </div>   
    );
  }
}

export default App;
