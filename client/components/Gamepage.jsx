import React, { useState } from 'react';
import  Navbar from './Navbar';
import Hintsboard from './Hintsboard';
import { Metrics } from './Metrics';
import { Userinput } from './Userinput';

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

const Gamepage = () => {
  const [ score, setScore ] = useState();
  const [ currCountry, setCurrCountry] = useState();
  const [ hints, setHints ] = useState();
  const [ wrong, setWrong ] = useState();

  // Fetch data 

    // Randomize facts and store data in an object with country and an array with random facts

  // As user progresses through the questions (right/wrong) feed the next question by updating state of country and currHints

  return (
    <div>
      <Navbar></Navbar>
      <Metrics score={score} ></Metrics>
      <Hintsboard setScore={setScore} hints={hints} wrong={wrong} setWrong={setWrong}></Hintsboard>
      <Userinput currCountry={currCountry} wrong={wrong} setWrong={setWrong} ></Userinput>
    </div>
  );
}


export default Gamepage;