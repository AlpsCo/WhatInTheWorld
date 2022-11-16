import React, { useEffect, useState } from 'react';
import Card from './Card';

const Trivia = props => {
  const getTen = props.getTen;
  const tenCountries = props.tenCountries;
  const [currentCountry, setCurrentCountry] = useState('');
  const [countryFacts, setCountryFacts] = useState({
    name: '',
    language: [],
    nativeName: '',
    capital: '',
    landlocked: true,
    borders: [],
    currency: '',
    flagUrl: '',
    population: 0
  });

  const eachOne = [];
  for (let i = 0; i < tenCountries.length; i++){
    eachOne.push(<Card one={tenCountries[i]} />);
  }


  return(
    <div>
      <button onClick={getTen}>PRess</button>
      <div>{eachOne}</div>
    </div>
    
  );
};

export default Trivia;