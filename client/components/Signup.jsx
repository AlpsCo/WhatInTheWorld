import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/*
Form
  username
  password
  button
  Signup link
*/


function Signup() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log(event.target, ' was... ', event);
  };

  return (
    <>
      <h1 id= 'title'>What In The World?</h1>
      <div id='signupDiv'>
        <p>Enter desired Username and Password</p>
        <form className='signupDivForm' onSubmit={handleClick}>
          <input className="inputFields" type='text' id='username' name='username' placeholder="Username"></input>
          <br></br>
          <input className="inputFields" type='password' id='password' name='password' placeholder='Password'></input>
          <br></br>
          <input className="signupDivBtn" type='submit' value='Signup'></input>
        </form>
      </div>
    </>
  );
}


export default Signup;