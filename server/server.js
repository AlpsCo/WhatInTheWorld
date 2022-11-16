const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const userController = require('./controllers/userController');
const countryController = require('./controllers/countryController');
const gameController = require('./controllers/gameController');


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

// getting list of all countries 
app.get('/countries', countryController.getCountries, (req, res) => {
  console.log('get countries - successful');
  return res.status(200).json(res.locals.countries);
});

// getting list of country facts
app.get('/facts', countryController.getCountriesFacts, (req, res) => {
  console.log('get country facts - successful');
  return res.status(200).json(res.locals.facts);
});

// get previous high score
app.get('/getscore/:username', gameController.getScore, (req, res) => {
  console.log('get score - successful');
  return res.status(200).json(res.locals.score);
});

// update high score 
app.patch('/syncscore/:username', gameController.syncScore, (req, res) => {
  console.log('sync score - successful');
  return res.status(200).json(res.locals.newHighScore);
});


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'an error occurred'}
  };
  const errorObj = Object.assign({}, defaultErr);
  errorObj.message.err = err;
  console.log('ERROR: ', errorObj.message);

  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});