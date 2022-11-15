/*
What should we test? 
buttonclick
component render
State change with score




import
describe
it
  expect
  

*/
import { render, screen } from '@testing-library/react'
import { beforeEach, expect, it } from '@jest/globals';
import Gamepage from '../client/components/Gamepage';

//test if score changes correctly
//the function we are testing is going to read state, and update state by an amount. 

// Larger function that get's called when submit button gets's click
    // Input: 
    // purpose: To check 
describe('Gamepage\' test', () => {
  let state;
  beforeEach(()=> {
    state = {
      totalScore = 6,
      scoreAmount = 3,
      correctAnswer = 'Canada'
    }
  });

  it('Score will increment with correct number', () => {
    expect(incrementTotalScore(state.scoreAmount)).toEqual(state.totalScore + state.scoreAmount);
    expect(incrementTotalScore(5).toEqual(state.totalScore + 5));
  });

  it('Does user input match correctAnswer?', () => {
    expect(checkAnswer('Canada')).toEqual(true);
    expect(checkAnswer('Iraq')).toEqual(false);
  });
  
  it('check if scoreAmount is being decremented correctly', () => {
    expect(decrementScoreAmount()).toEqual(state.scoreAmount - 1);
  })


})


/*
How to test if a component renders?
  Snapshot is in Jest, but needs us to create the component to get the snapshot. Chicken vs. Egg. 
  Enzyme is a testing library that works with Jest. Has shallow method that can do shallow rendering. Doesn't do sub renders though. 
  @testing-library/react, allows us to check specific things rendered on "screen". 
    https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library
  IE: 
    expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
      expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
      expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
      expect(screen.getByRole("img")).toBeInTheDocument();

*/


//test if a component renders correctly.

describe('Gamepage should render a BLAH component correctly', () => {
  //set up variables and such
  it('BLAH component should render', () => {
    expect(?).toSomething
  })
})



//test if a button does it's job?
