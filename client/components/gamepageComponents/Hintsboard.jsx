import React, { useEffect, useState } from 'react';
import { Button, Input } from '@chakra-ui/react';


const Hintsboard = (props) => {
  const nextRound = props.nextRound;
  const setNextRound = props.setNextRound;
  const username = props.username;
  const score = props.score; 
  const setScore = props.setScore; 
  const hints = props.hints;
  let currCountry = props.currCountry;
  const changeCountry = props.changeCountry;
  const setHighScore = props.setHighScore;
  const hintsRemaining = props.hintsRemaining;
  const setHintsRemaining = props.setHintsRemaining;

  const [currentHint, setCurrentHint] = useState(hints[hintsRemaining - 1]);
  const [isFlag, setIsFlag] = useState(false);
  const [scoreDeduction, setScoreDeduction] = useState(0);

  useEffect(() => {
    console.log('inside useEffect: ');
    console.log('hints: ', hints, 'hints remaining: ', hintsRemaining, 'current hint: ', currentHint)
    // Getting a randomized array with string and a possible object containing a picture
    if(hintsRemaining > 0){
      const newHint = hints[hintsRemaining - 1];
      if (typeof(newHint) === 'object') {
        console.log('inside flag logic', hints[hintsRemaining - 1]);
        setCurrentHint(hints[hintsRemaining - 1].url);
        setIsFlag(true); 
      }
      else {
        setCurrentHint(hints[hintsRemaining - 1]);
        setIsFlag(false);
      }
    } else {
      // Wrong answer but no more hints
      setScoreDeduction(0);
      alert(`You suck at geography, you must be American!!! The country was ${currCountry}, obviously.`);
      setNextRound(nextRound + 1);
    }
    // feed new hints as long as answered wrong and there are hints remaining
  }, [hintsRemaining, hints]);

  const handleClick = () => {
    //case insensitive
    const input = document.getElementById('input').value.toLowerCase();
    currCountry = currCountry.toLowerCase();
    
    // Compare user input with current country 
    if (input === currCountry) {
      // Right? increase total score by adding the current question points
      console.log('right');
      alert('CORRECT!');
      setScore(score + (10 - scoreDeduction));
      setScoreDeduction(0);
      setNextRound(nextRound + 1);
      fetch('/syncscore/' + username, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify({score: (score + (10 - scoreDeduction)), username: username}),
      })
        .then(data => data.json())
        .then(data => {
          console.log('response from sync highscore ', data);
          setHighScore(data);
          console.log('successfully updated score');
        });
    } else {
      // Wrong? feed user a hint and decrease the current possible points in this question 
      console.log('wrong');
      setHintsRemaining(hintsRemaining - 1);
      setScoreDeduction(scoreDeduction + 1);
    }
  };

  return(
    <div className="hintsboard">
      <div className='possible-points'>
        <p>Possible points this round: </p>
        <p>{10 - scoreDeduction}</p>
      </div>
      <div className='hint'>
        {isFlag ?
          <div className='flag'> 
            <h4>The flag of this country is </h4>
            <img src={currentHint} alt="" />
          </div>  :
          <h3>{currentHint}</h3>
        }
      </div>
      <div className='input-form'>
        <input type="text" className='input' id='input' placeholder='Guess the country'/>
        <button className='button' onClick={() => {handleClick()}}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Hintsboard;