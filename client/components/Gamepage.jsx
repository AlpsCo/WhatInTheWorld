import React, { useEffect, useState } from 'react';
import  Navbar from './gamepageComponents/Navbar';
import Hintsboard from './gamepageComponents/Hintsboard';
import Metrics from './gamepageComponents/Metrics';
// import { Userinput } from './gamepageComponents/Userinput';
import { Button } from '@chakra-ui/react';

/*
state
  totalScore    integer
  questionPoints  integer
  factoids    [string, string, string]
  country   string

context
  username    string
  theme       string

//Functions  
Larger function that get's called when submit button gets's click
  Input: users input will get passed by button click event handler?
  Output:
  purpose: To check 
  checkIfGuessIsRight() ?  incrementTotalScore : decrementQuestionPoints + reveal Next Factoid


incrementTotalScore:
  Gets invoked only if answer is correct and adds to the total score

decrementQuestionPoints
  If question is wrong it will decrease the possible points of answering the question correctly until it reaches 0 
  If question points is 0 we invoke the display next question

checkIfGuessIsRight
  checks if user input matches this.state.country
timer

reveal next factoid

//Components
  //TOP
Logout Button
encyclopedia Link

  //Middle
score display
timer display

Factoids
  country fact
  country fact
  country fact

  //Bottom
guessInput
Submit button


*/

const Gamepage = (props) => {
  const [ score, setScore ] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const [timer, setTimer] = useState(0); 
  const [ currCountry, setCurrCountry] = useState('Zimbabwe');
  const [ hints, setHints ] = useState(['Ruler is Victor Von Doom.', 
    'In eastern Europe.', 
    {url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Latveria.svg'}, 
    'Capital is DoomStadt.', 
    'Is an "enforced monarchy', 
    'Population is 500,000.']);
  const [hintsRemaining, setHintsRemaining] = useState(hints.length);
  // We set this to true when they guess correctly, use this to trigger next question steps. 

  // get initial high score 
  // getting high score
  useEffect(() => {
    fetch('/getscore/' + props.user)
      .then(data => data.json())
      .then(data => {
        setHighScore(data.highscore);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.user]);

  // Fetch data 
  async function handleClick() {
    await fetch('/countries')
      .then(data => data.json())
      .then(countriesArray => {
        const randomIndex = Math.floor(Math.random() * (countriesArray.length));
        console.log(randomIndex, countriesArray[randomIndex]);
        setCurrCountry(countriesArray[randomIndex]);
        setTimer(0);
        setHintsRemaining(6);
      })
      .catch(error => {
        console.log(error);
      });

      
    console.log('end of handleClick');
  }
    
  // Randomize facts and store data in an object with country and an array with random facts
  useEffect(() => {
    fetch('/facts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain',
      },
      body: JSON.stringify({country: currCountry}),
    })
      .then(data => data.json())
      .then(facts => {
        console.log('we got... ', facts, 'and we converted to...', objectToRandomArray(facts));
        setHints(objectToRandomArray(facts));     
      });
  }, [currCountry]); 

  // As user progresses through the questions (right/wrong) feed the next question by updating state of country and currHints

  return (
    <div className='gamepage'>
      <Navbar></Navbar>
      <div id="notnav">
        <Metrics score={score} highscore={highscore} username={props.user} timer={timer} setTimer={setTimer}></Metrics>
        {/* <Button colorScheme='orange' onClick={() => {handleClick()}}>START</button> */}
        <div className='gamePageBox'>
          <div className='button-container'>
            <button className='button' onClick={() => {handleClick();}}>GET ANOTHER COUNTRY</button>
          </div>
          <Hintsboard score={score} setScore={setScore} hints={hints} currCountry={currCountry} changeCountry={handleClick} username={props.user} setHighScore={setHighScore} hintsRemaining={hintsRemaining} setHintsRemaining={setHintsRemaining}></Hintsboard>
          {/* <Userinput currCountry={currCountry}  ></Userinput> */}
        </div>
      </div>
    </div>
  );
};


function objectToRandomArray(factoidsObject){
  //{key1: value1, key2: value2, key3: value3}    -> randomized array ["factoid", "factoid", "factoid", {url: 'picture'}]

  //If we loop through key/value pairs, and put into array with random indices, annoying to keep track and not overwrite things. 
  //So convert to array and then randomize in place. 
  //Is there a built in shuffle method? No. :/

  //convert object to array, formatting for text/url as we go. 
  const arrayOfFactoids =  [];
  for(const key in factoidsObject){
    //if picture/url, make an object. If not, format a string. 
    if(String(factoidsObject[key]).includes('http')){
      arrayOfFactoids.push({url: factoidsObject[key]});
    } else if (key !== 'name') {
      if (key === 'language'){
        arrayOfFactoids.push(`The official languages of this country are ${factoidsObject[key]}`);
      }
      else if (key === 'landlocked'){
        if (factoidsObject[key] === true){
          arrayOfFactoids.push('This country is landlocked');
        }
        else arrayOfFactoids.push('This country is not landlocked');
      }
      else if (key === 'currency'){
        arrayOfFactoids.push(`The currency used in this country has a symbol ${factoidsObject[key]}`);
      }
      else if (key === 'nativeName'){
        arrayOfFactoids.push(`The native name of this country is ${factoidsObject[key]}`);
      }
      else if (key === 'hasBeenColonizedByBritain'){
        if (factoidsObject[key] === true){
          arrayOfFactoids.push('This country has been colonized by Britain');
        }
        else arrayOfFactoids.push('This country has NOT been colonized by Britain :O');
      }
      else if (key === 'borders'){
        arrayOfFactoids.push(`The (abbreviated) countries that border this country are ${factoidsObject[key]}`);
      }
      else arrayOfFactoids.push(`The ${key} of this country is ${factoidsObject[key]}`);
    }
  }
  //Now need to randomize the array. 
  //Loop through array
  //swap index and a random index
  for(let index = 0; index < arrayOfFactoids.length; index++){
    const randomIndex = Math.floor(Math.random() * arrayOfFactoids.length);

    const temporary = arrayOfFactoids[index];
    arrayOfFactoids[index] = arrayOfFactoids[randomIndex];
    arrayOfFactoids[randomIndex] = temporary;
  }

  return arrayOfFactoids;
}



export default Gamepage;