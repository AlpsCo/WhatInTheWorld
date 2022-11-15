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
import Gamepage from '../client/components/Gamepage';

//test if score changes correctly
//the function we are testing is going to read state, and update state by an amount. 

// Larger function that get's called when submit button gets's click
    // Input: 
    // purpose: To check 
describe('Gamepage\' test', () => {
  let scoreAmount = 5;
  it('Score will increment with correct number', () => {
    let totalScore = 6;
    expect(incrementScore(scoreAmount)).toEqual(11);
  });
  

  
  
})


//test if a component renders correctly.
describe('Gamepage should render a BLAH component correctly', () => {
  //set up variables and such
  it('BLAH component should render', () => {
    expect(?).toSomething
  })
})



//test if a button does it's job?
