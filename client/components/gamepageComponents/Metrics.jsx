import React, { useEffect, useState } from 'react';

const Metrics = ({ score, highscore, username, timer, setTimer}) => {


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return(
    <div className='metrics'>
      <div className='username-display'>
        <p>Welcome {username}!</p>
      </div>
      <div className='high-score'>
        <p>Your highscore: {highscore}</p>
      </div>
      <div className='score'>
        <p>Current score: {score}</p>
      </div>
      <div className='timer'>
        <p>Timer: {timer}</p>
      </div>
    </div>
  );
};

export default Metrics;