import React from 'react';
import Result from './Result';

const SearchResults = ({ isLoading, inputValue, cities }) => {
  return (
    <React.Fragment>
      { isLoading ? null :
          (inputValue === '') ? null :
            <React.Fragment>
              {cities
                .filter(ea => 
                    ea.city.includes(inputValue) ||
                    ea.state.includes(inputValue)
                )
                .map(({ city, state, population }, key) =>
                  <Result
                    key={ key }
                    city={ city }
                    state={ state }
                    population={ population }
                  />
                )
              }
            </React.Fragment>
      }
    </React.Fragment>
)}

export default SearchResults;