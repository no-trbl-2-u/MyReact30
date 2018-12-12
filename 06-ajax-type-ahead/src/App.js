import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isLoading: true,
      cities: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  updateState(data) {
    this.setState({
      cities: data,
      isLoading: false
    });
  }

  componentDidMount() {
    const { updateState } = this;
    const url = 'https://gist.githubusercontent.com'+
                '/Miserlou/c5cd8364bf9b2420bb29/raw'+
                '/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6'+
                '/cities.json';
    
    fetch(url)
      .then(response => response.json())
      .then(jsonifiedData => updateState(jsonifiedData))
  }

  render() {
    const { inputValue, isLoading, cities } = this.state;
    const { handleInputChange } = this;
    return (
      <div className="App">

        <SearchBar
          value={ inputValue }
          handleInputChange={ handleInputChange }
          isLoading={ isLoading }
          inputValue={ inputValue }
          cities={ cities }
        />

      </div>
    );
  }
}

export default App;
