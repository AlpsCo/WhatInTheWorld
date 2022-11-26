import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Gamepage from './components/Gamepage';

export default function App() {
  const [user, setUser] = useState('');

  return (
    <div id='appDiv'>
      <Routes>
        <Route path='/' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/gamepage' element= {<Gamepage user={user}/>} />
      </Routes>
    </div>
  );
}
