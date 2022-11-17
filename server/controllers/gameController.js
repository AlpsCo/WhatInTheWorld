const db = require('../dbModel.js');
const fetch = require('node-fetch');

const gameController = {};

gameController.getScore = (req, res, next) => {
  const { username } = req.params;
  console.log(username);

  const getScoreQuery = `SELECT highscore from users WHERE username='${username}'`;
  db.query(getScoreQuery) 
    .then(data => {
      const score = data.rows[0];
      res.locals.score = score;
      return next();
    })
    .catch(error => {
      return next(error);
    });
};

gameController.syncScore = (req, res, next) => {
  const { score } = req.body;
  const { username } = req.params;
  
  const getScoreQuery = `SELECT highscore from users WHERE username='${username}'`;
  db.query(getScoreQuery) 
    // .then(data => data.json()) 
    .then(data => {
      const previousHighScore = data.rows[0].highscore;
      console.log('previous high score is: ', previousHighScore, 'score is: ', score)
      if (previousHighScore < score) {
        const setScoreQuery = `UPDATE users SET highscore=${score} WHERE username='${username}'`;
        db.query(setScoreQuery)
          .then(() => {
            res.locals.newHighScore = score;
            return next();
          })
          .catch(error => {
            return next(error);
          });
      }
      else { 
        res.locals.newHighScore = previousHighScore;
        return next();
      }
    })
    .catch(error => {
      return next(error);
    });
};

module.exports = gameController;