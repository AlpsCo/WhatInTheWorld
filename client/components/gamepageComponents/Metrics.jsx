import React from 'react';

const Metrics = ({ totalScore, timer }) => {

  return(
  <div className='metrics'>
    <p>metrics</p>
    <p>score: {totalScore}</p>
    <p>timer: {timer}</p>
  </div>
  )
};

export default Metrics