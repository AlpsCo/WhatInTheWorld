import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../App';
/*

*/
function Login() {
  const navigate = useNavigate();
  //const {value, setValue} = useContext(UserContext.user);
  const handleClick = async (e) => {
    e.preventDefault();

    const body = { username: e.target[0].value, password: e.target[1].value };

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain',
      },
      body: JSON.stringify(body),
    });
    const receivedBack = await res.json();
    console.log(receivedBack);
    //If we receive back a username then the login was successful
    if (receivedBack === body.username) {
      //add username to state
      //setValue(body.username);
      navigate('/gamepage');
      

      //else let them know the information is wrong
    } else {
      alert('Wrong Information');
    }
  };

  return (
    <>
      <h1 id= 'title'>What In The World?</h1>
      <div id='loginDiv'>
        <h1>Please Log In </h1>
        <form className='loginDivForm' onSubmit={handleClick}>
          <input className="inputFields" type='text' id='username' name='username' placeholder="Username"></input>
          <br></br>
          <input className="inputFields" type='password' id='password' name='password' placeholder='Password'></input>
          <br></br>
          <input className="loginDivBtn" type='submit' value='Login'></input>
        </form>

        <Link to='/signup' id='newAccBtn'>Create A New Account</Link>
      </div>
    </>
  );
}


export default Login;