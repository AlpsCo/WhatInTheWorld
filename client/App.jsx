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



<<<<<<< HEAD
function App() {
  const [user, setUser] = useState('');
  
=======
export default function App() {
  const [value, setValue] = useState(UserContext.user);

>>>>>>> c8beb67d94c832778c45db79ac9da80b0ee598f3
  return (

    <ThemeContext.Provider>
      <UserContext.Provider value ={{value, setValue}}>
        <div id='appDiv'>
          <Routes>
            <Route path='/' element={<Login setUser={setUser}/>} />
            <Route path='/signup' element= {<Signup />} />
            <Route path='/gamepage' element= {<Gamepage user={user}/>} />
          </Routes>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>

  );
}
