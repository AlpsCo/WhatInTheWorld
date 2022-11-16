import React, { useEffect, useState } from 'react';
import Trivia from './components/Trivia';

const App = props => {

  const [tenCountries, setTen] = useState([]);

  function getTen(){
    const ten = [];
    fetch('/countries')
      .then(data => data.json())
      .then(res => {
        for (let i = 0; i < 10; i++){
          const idx = Math.floor(Math.random() * res.length);
          const chosen = res.splice(idx,1);
          ten.push(chosen);
        }
      });
    setTen(ten);
  }
  // function getFax(oneC){
  //   const oneCountry = {country: oneC};
  //   fetch('/facts', {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(oneCountry)
  //   })
  //     .then(res => res.json())
  //     .then(fax => setCountryFacts(fax));
  //   return countryFacts;
  // }

  
  return(
    <div>
      <Trivia getTen={getTen} tenCountries={tenCountries}/>
      {/* <button onClick={getTen}>press me hehe</button> */}
      {/* <button onClick={getFax('Colombia')}>now press me</button> */}
    </div>
    
  );
};


export default App;