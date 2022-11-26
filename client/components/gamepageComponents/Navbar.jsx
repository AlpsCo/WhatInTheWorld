import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';


const Navbar = () =>{
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return(
    <div id="navbar">
      <button className='button' onClick={handleLogout}>Sign Out</button>
    </div>
  );
};
export default Navbar;

