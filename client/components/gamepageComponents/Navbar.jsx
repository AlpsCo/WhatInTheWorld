import React from 'react';
import { useNavigate, Link } from 'react-router-dom';



const Navbar = () =>{
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove user from state

    // Finish session

    // Navigate to login
    navigate('/');
  };
  return(
    <div id="navbar">
      <button onClick={''}></button>
      <button onClick={handleLogout}>Sign out</button>
    </div>
  );
};
export default Navbar;

