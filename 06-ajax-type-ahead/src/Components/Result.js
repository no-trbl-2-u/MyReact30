import React from 'react';

const Result = ({ city, state, population }) => {
  return (
    <li>
      <span className="name">{ `${city}, ${state}` }</span>
      <span className="population">{ population }</span> 
    </li>  
  );
}
  
 export default Result;