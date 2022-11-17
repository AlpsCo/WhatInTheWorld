import { describe, it, expect, beforeAll, beforeEach } from '@jest/globals';
const db = require('../server/dbModel.js');
const fetch = require('node-fetch')


describe('User creating an account - POST /signup', () => {
  beforeEach(() => {
    console.log('inside beforeEach, about to delete hannah')
    const deleteUser = "DELETE FROM users WHERE username='hannah'"
    db.query(deleteUser);
  })

    it('should return a 200 status if user is successfully created', async () => {
    await fetch('http://localhost:3000/signup', {
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: "hannah",
        password: "password"
      })
    })
    .then(res => expect(res.status).toBe(200))
  })

  it('should return an error message if username is already taken', async () => {
    const testUsername = 'hannah'
    await fetch('http://localhost:3000/signup', {
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: testUsername,
        password: "password"
      })
    })
      .then(error => {
        console.log('Sign up error successful')
        console.log(error)
        const errorMessage = error.err;
        expect(errorMessage).toBe(`Key (username)=(${testUsername}) already exists.`)
      })
      .catch(error => {
        console.log('inside second test, error: ', error)
      })
  });
    console.log('end of test')
})
