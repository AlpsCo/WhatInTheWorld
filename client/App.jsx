import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Gamepage from './components/Gamepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/gamepage' element= {<Gamepage />} />
      </Routes>
    </div>
  );
}


export default App;