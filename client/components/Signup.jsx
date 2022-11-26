import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const body = { username: e.target[0].value, password: e.target[1].value };

    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain',
      },
      body: JSON.stringify(body),
    });

    //If we receive back status code 200 then signup was successful
    if (res.status === 200) {
      navigate('/');
      
      //if username already exists in db, alert user to try again with a different username
    } else if(res.status === 500) {
      alert('Try a different username');
    }
  };

  return (
    <>
      <h1 id= 'title'>What In The World?</h1>
      <div id='signupDiv'>
        <div className='box'>
          <p>Please enter your desired username and password</p>
          <form className='signupDivForm' onSubmit={handleClick}>
            <input className="inputFields" type='text' id='username' name='username' placeholder="Username"></input>
            <br></br>
            <input className="inputFields" type='password' id='password' name='password' placeholder='Password'></input>
            <br></br>
            <input className="signupDivBtn" type='submit' value='Signup'></input>
          </form>
          <Link to='/' id='newAccBtn'>Go back to Login</Link>
        </div>
      </div>
    </>
  );
}


export default Signup;