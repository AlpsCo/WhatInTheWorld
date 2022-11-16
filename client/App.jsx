import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Gamepage from './components/Gamepage';
//import { ContextProvider } from './contexts/context';

//Set up Context for use on all pages. 
const userContextData = {user: ""};
const themeContextData = {
  light: {
    foreground: "", 
    background: ""
}, 
  dark:{
    foreground: "", 
    background: ""
  }
};
const ThemeContext = React.createContext(themeContextData);
const UserContext = React.createContext(userContextData);
//To use context, do...
//const blah = useContext(UserContext/ThemeContext);


function App() {
  return (
    <ThemeContext.Provider>
      <UserContext.Provider>
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element= {<Signup />} />
            <Route path='/gamepage' element= {<Gamepage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}


export default App;