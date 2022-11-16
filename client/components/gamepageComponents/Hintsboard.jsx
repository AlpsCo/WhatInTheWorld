import React, { useEffect, useState } from 'react';
import { Button, Input } from '@chakra-ui/react';


const Hintsboard = (props) => {
  const score = props.score;
  const setScore = props.setScore;
  let hints = props.hints;
  let currCountry = props.currCountry;
  let changeCountry = props.changeCountry;
  //Pulling hints from state
  //deep copying them into copyHints
  //making empty displayHints
  //As we go, we are popping from copyHints, into displayHints. 
  //displaying displayHints.

  // hints is already randomized - ["factoid", "factoid", "factoid", {url: 'picture'}]

  
  const [hintsRemaining, setHintsRemaining] = useState(hints.length);
  const [currentHint, setCurrentHint] = useState(hints[hintsRemaining-1]);
  const [inputWrong, setInputWrong] = useState(false);
  const [isFlag, setIsFlag] = useState(false);
  const [scoreDeduction, setScoreDeduction] = useState(0);
  const [guessBool, setGuessBool] = useState(false);




  useEffect(() => {
    console.log('inside useEffect: ', currentHint)
    // Getting a randomized array with string and a possible object containing a picture
    if(hintsRemaining>=0){
      const newHint = hints[hintsRemaining];
      if (typeof(newHint)==='object') {
        console.log('inside flag logic', hints[hintsRemaining])
        setCurrentHint(hints[hintsRemaining].url);
        setIsFlag(true); 
      }
      else {
        setCurrentHint(hints[hintsRemaining]);
        setIsFlag(false);
      }
    } else {
      // Wrong answer but no more hints
      setScoreDeduction(0);
      alert(`You suck at geography, you must be American!!! The country was ${currCountry}, obviously.`)

    }
    // feed new hints as long as answered wrong and there are hints remaining
  }, [hintsRemaining, hints])

  const handleClick = () => {
    // Handle user guess
    // potentially process capitalization of string to minimize mismatch Ex. MeXico === MEXICO 
    const input = document.getElementById('input').value;
    const parsedInput = input.slice(0,1).toUpperCase() + input.slice(1, input.length).toLowerCase();
    console.log(parsedInput);
    // Compare user input with current country 
    if (parsedInput === currCountry) {
      // Right? increase total score by adding the current question points
      console.log('right');
      alert('CORRECT!');
      setScore(score + (10 - scoreDeduction));
      setScoreDeduction(0)
      // changeCountry();
    } else {
      // Wrong? feed user a hint and decrease the current possible points in this question 
      console.log('wrong');
      setInputWrong(true);
      if (hintsRemaining === 0){
        setHintsRemaining(0);
      }
      else{
        setHintsRemaining(hintsRemaining - 1);
        setScoreDeduction(scoreDeduction + 1);
      }
    }
  }

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
        <input type="text" className='input' id='input'/>
        <label className="label">Guess the country</label>
        {/* <Button colorScheme='orange' onClick={() => {handleClick()}}>SUBMIT</Button> */}
        <button className='button' onClick={() => {handleClick()}}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Hintsboard;