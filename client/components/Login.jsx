import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../App';
import logo from '../assets/earf.png';

/*

*/

function Login(props) {
  const navigate = useNavigate();
  //const {value, setValue} = useContext(UserContext.user); *decided to wait on implementing context*

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

    //If we receive back the username then the login was successful
    if (receivedBack === body.username) {
      props.setUser(receivedBack);
      navigate('/gamepage');
      
    //else let them know the information is wrong
    } else {
      alert('Wrong Information');
    }
  };

  return (
    <>
      <h1 id= 'title'>What In The World?</h1>
      {/* <img src={'https://imgur.com/yLuYIVw'}></img> */}
      <div id='loginDiv'>
        <div className='box'>
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
      </div>
    </>
  );
}


export default Login;