const { Pool } = require('pg');

const myURI = 'postgres://yhkqrmvr:fQbFiQ_GYGUaVHbXIdV3gm112BmJYbvX@queenie.db.elephantsql.com/yhkqrmvr';
// const URI = process.env.PG_URI || myURI;

// const myURI = 'postgres://yhkqrmvr:fQbFiQ_GYGUaVHbXIdV3gm112BmJYbvX@queenie.db.elephantsql.com/yhkqrmvr';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};