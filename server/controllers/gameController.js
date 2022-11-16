const db = require('../dbModel.js');
const fetch = require('node-fetch');

const gameController = {};

gameController.syncScore = (req, res, next) => {
  const { score } = req.body;
  const { username } = req.params;

  const getScoreQuery = `SELECT score from users WHERE username='${username}'`;
  db.query(getScoreQuery) 
    .then(data => data.json()) 
    .then(data => {
      const previousHighScore = data.rows[0];
      if (previousHighScore < score) {
        const setScoreQuery = 
      }
    })

}

module.exports = gameController;