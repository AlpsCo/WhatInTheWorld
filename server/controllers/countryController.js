// set up database 
const db = require('../dbModel.js');
const fetch = require('node-fetch');

const countryController = {};

countryController.getCountries = (req, res, next) => {
  fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      res.locals.countries = data;
      return next();
    })
    .catch(err => {
      return next(err);
    });

};


module.exports = countryController;
