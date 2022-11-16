import React from 'react';

export const Metrics = ({ totalScore, timer }) =>{
  <div id='metricsDiv'>
    <p>score: {totalScore}</p>
    <p>timer: {timer}</p>
  </div>;
};