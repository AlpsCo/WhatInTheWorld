import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';

//create a root
const root = createRoot(document.getElementById('root'));


//initial render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
