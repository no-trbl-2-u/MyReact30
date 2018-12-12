import React from 'react';

import SearchResults from './SearchResults'

const SearchBar = ({ inputValue, handleInputChange, isLoading, cities }) => (
  <div>
    <form className="search-form">
      <input 
        type="text" className="search" 
        placeholder="City or State"
        value={ inputValue }
        onChange={ handleInputChange }
      />

      <ul className="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>

        <SearchResults
          isLoading={ isLoading }
          inputValue={ inputValue }
          cities = { cities }
        />
      </ul>
    </form>
  </div>
)

export default SearchBar