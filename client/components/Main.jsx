import React from 'react';

const Main = () => {

  const handleClick = () => {
    // send get request to /encyclopedia for getting array of countries 
    fetch('/countries')
      .then(data => data.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className='main'>
      <div className='top-bar'> 
        <button onClick={() => handleClick}>encylopedia</button>
        <button>Logout</button>
      </div>
      <div className='score-timer'>

      </div>
      <div className='country-fact'>

      </div>
      <div className='UI-buttons'>

      </div>
    </div>
  );
};

export default Main;