import React, { useEffect, useState } from 'react';

const Metrics = ({ score, highscore, username}) => {

  const [timer, setTImer] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTImer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval);
    };
  });

  return(
  <div className='metrics'>
    <div className='username-display'>
      <p>Username: {username}</p>
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
  )
};

export default Metrics