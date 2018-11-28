import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    }
    this.setTime = this.setTime.bind(this);
  }

  setTime() {
    const now = new Date()
    this.setState({
      seconds: now.getSeconds(),
      minutes: now.getMinutes(),
      hours: now.getHours()
    })
  }

  componentDidMount() {
    const now = new Date();
    this.interval = setInterval(this.setTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {seconds, minutes, hours} = this.state
    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand second-hand"></div>
          <div className="digital-time">
            <span>{ (hours < 9) ? `0${hours}` : hours } : </span>
            <span>{ minutes } : </span>
            <span>{(seconds < 9) ? `0${seconds}` : `${seconds}`} </span>
            <span>{(hours <= 12) ? 'AM' : 'PM'}</span>
          </div>
        </div>
      </div>   
    );
  }
}

export default App;
