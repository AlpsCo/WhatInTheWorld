import React, { useState } from 'react';


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

function Gamepage() {
  //Set up state.
  //We will get factoids from the BE as an object, randomize, and build something like this.
  const [factoids, setFactoids] = useState({
    country: 'Latveria', 
    1: 'Major languages are German, Hungarian, Latverian, Romany', 
    2: 'The monetary unit is the Latverian Franc.',
    3: 'The capital City is Doomstadt',
    4: 'The major airport is Doomsport Airport',
    5: 'The country to the south is Symkaria',
    6: 'the national motto is: "We master all that lies before."',
    7: 'The region is Eastern Europe',
    8: 'The ruler is Dr. Victor von Doom.',
    9: 'The government style is "enforced monarchy"',
  });
  return (
    <div>
    </div>
  );
}


export default Gamepage;