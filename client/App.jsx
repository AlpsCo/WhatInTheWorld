import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Gamepage from './components/Gamepage';

//Set up Context for use on all pages. 
//To use context, do...
//const blah = useContext(UserContext/ThemeContext);
const userContextData = {user: ''};
const themeContextData = {
  light: {
    foreground: '', 
    background: '',
  }, 
  dark:{
    foreground: '', 
    background: '',
  }
};
export const ThemeContext = React.createContext(themeContextData);
export const UserContext = React.createContext(userContextData);



export default function App() {
  const [value, setValue] = useState(UserContext.user);

  return (
    <ThemeContext.Provider>
      <UserContext.Provider value ={{value, setValue}}>
        <div id='appDiv'>
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
