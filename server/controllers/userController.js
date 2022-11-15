// set up database 
const db = require('../dbModel.js');
const bcrypt = require('bcrypt');
const saltFactor = 10;
const userController = {};

userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  console.log('inside userController.signUp, username and password: ', username, password);
  bcrypt.hash(password, saltFactor, (err, hash) => {
    // save hashed password and username to database
    const signupQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    db.query(signupQuery, [username, hash])
      .then(() => {
        console.log('User created');
        return next();
      })
      .catch(error => {
        console.log('Username already exists');
        return next(error);
      });

    //if problem hashing password return an error
    if (err){
      return next(err);
    }
  });
};

userController.logIn = (req, res, next) => {
  const { username } = req.body;
  const query = 'SELECT password FROM users WHERE username = $1';
  // query database to see if that username exists
  db.query(query, [username])
    .then(dbResponse => {
      if (dbResponse.rows[0] === undefined) {
        // if nothing is found, return 401 status
        return res.status(401).json({ message: 'no username found' });
      } else {
        // if record is found, compare password
        const { password } = dbResponse.rows[0];
        bcrypt.compare(req.body.password, password, (err, result) => { 
          // if bcrypt.compare returns an unknown error, return an error
          if (err) { 
            return next({
              log: `userController.verifyUser: ERROR: Error comparing password: ${err}`,
              message: { err: 'Error comparing password' },
            });
          }
          if (result) {
            //if passwords match send back username
            res.locals.username = username;
            return next();
          }
          else {
            // if passwords don't match, return 401 status
            return res.status(401).json({ message: 'incorrect password' });
          }
        });
      }
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = userController;


//usernames and passwords
//hannah - password
//curtis - anotherpassword
//z - tbh i dont remember
//sam - mypassword