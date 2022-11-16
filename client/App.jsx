import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Gamepage from './components/Gamepage';
//import { ContextProvider } from './contexts/context';

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
const ThemeContext = React.createContext(themeContextData);
const UserContext = React.createContext(userContextData);



function App() {
  const [user, setUser] = useState('');
  
  return (

    <ThemeContext.Provider>
      <UserContext.Provider>
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


export default App;