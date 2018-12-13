import React, { Component } from 'react';

class Result extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log(this.props.inputVal);
  }
  render() {
    const { city, state, population } = this.props
    return(
      <li>
        <span className="name">{ `${city}, ${state}` }</span>
        <span className="population">{ population }</span> 
      </li>  
    )
  }
}

  
 export default Result;