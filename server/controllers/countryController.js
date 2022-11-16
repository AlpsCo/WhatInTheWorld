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

//capital (array)
//languages (objects)
//name.common
//name.nativeName.ara.official



// get facts of a particular country GET /facts
countryController.getCountriesFacts = (req, res, next) => {
  const country = req.body.country;
  fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(data => {
      let countryObject = {};
      for (const countryIndex in data) {
        if (data[countryIndex].name.common === country) {
          countryObject = data[countryIndex];
        }
      }
      const countryFact = {name: '' , language: '', nativeName: '', capital: '', landlocked: false, borders: [], currency: '', flagUrl: '', population: 0, hasBeenColonizedByBritain: true}
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

      fetch('https://en.wikipedia.org/wiki/List_of_countries_that_have_gained_independence_from_the_United_Kingdom')
        .then(data => data.json())
        .then(data => {
          const html_code = data['parse']['text']['*'];
          const parser = new DOMParser();
          const html = parser.parseFromString(html_code, 'text/html');
          var tables = html.querySelectorAll('.wikitable');
          console.log(tables);

          // actual useful stuff
          res.locals.facts = countryObject;
          return next();
        })

    })
    .catch(err => {
      return next(err);
    });

};

module.exports = countryController;
