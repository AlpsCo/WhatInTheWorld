import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'

const App = () => {

  return(
    <div> 
      <h3>If you can see this, react is working. yay!</h3> 
      <Main />
    </div>
  )
}


export default App