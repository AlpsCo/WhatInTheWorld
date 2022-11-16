// set up database 
const db = require('../dbModel.js');
const fetch = require('node-fetch');

const countryController = {};

// to get all country names GET /countries
countryController.getCountries = (req, res, next) => {
  fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(data => {
      const arrayOfCountries = [];
      for (const countryIndex in data) {
        arrayOfCountries.push(data[countryIndex].name.common);
      }
      res.locals.countries = arrayOfCountries;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

// get facts of a particular country GET /facts
countryController.getCountriesFacts = (req, res, next) => {
  const { country } = req.body;
  fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(data => {
      let countryObject = {};
      for (const countryIndex in data) {
        if (data[countryIndex].name.common === country) {
          countryObject = data[countryIndex];
        }
      }
      const countryFact = {name: '' , language: '', nativeName: '', capital: '', landlocked: false, borders: [], currency: '', flagUrl: '', population: 0}
      //common name
      countryFact.name = countryObject.name.common;
      //official language(s)
      const languageArray = [];
      for (const language in countryObject.languages) {
        languageArray.push(countryObject.languages[language]);
      }
      countryFact.language = languageArray;
      //native official name
      countryFact.nativeName = countryObject.name.nativeName[Object.keys(countryObject.name.nativeName)[0]].official;
      //capital
      countryFact.capital = countryObject.capital;
      //landlocked boolean
      countryFact.landlocked = countryObject.landlocked;
      //bordering countries abbreviations
      countryFact.borders = countryObject.borders; 
      //currency symbols
      const currencyArray = []; 
      for (const currency in countryObject.currencies) {
        currencyArray.push(countryObject.currencies[currency].symbol);
      }
      countryFact.currency = currencyArray;
      //flags 
      countryFact.flagUrl = countryObject.flags.png;
      //population 
      countryFact.population = countryObject.population;


      res.locals.facts = countryFact;
      return next();
    })
    .catch(err => {
      return next(err);
    });

};

module.exports = countryController;
