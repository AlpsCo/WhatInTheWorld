const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const userController = require('./controllers/userController');


app.use(express.json());

// serving static files, which we dont have yet lol 
// app.use('/', express.static(path.resolve(__dirname, '../assets')));

// serving bundle.js in ../dist
// app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  console.log('here i am');
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/signup', userController.signUp, (req, res) => {
  console.log('Signed up successfully');
  return res.status(200).json();
});

app.post('/login', userController.logIn, (req, res) => {
  console.log('Logged in successfully');
  return res.status(200).json(res.locals.username);
});


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});