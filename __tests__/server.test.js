import { describe, it, expect, beforeAll, beforeEach } from '@jest/globals';
const db = require('../server/dbModel.js');
import fetch from 'node-fetch';

describe('User creating an account - POST /signup', () => {
  beforeEach(() => {
    const deleteUser = 'DELETE FROM user WHERE username="hannah"'
    db.query(deleteUser);
  })

    it('should return a 200 status if user is successfully created', () => {
    fetch('http://localhost:3000/signup', {
      method: POST, 
      body: {
        username: 'hannah',
        password: 'password'
      }
    })
    .then(res => expect(res.status).toBe(200))
  })

  it('should return an error message if username is already taken', () => {
    fetch('http://localhost:3000/signup', {
      method: POST, 
      body: {
        username: 'hannah',
        password: 'password'
      }
    })
  });



describe('User logging in', () => {
  it('should return an error if password is incorrect', () => {

  })  
  
})

  })
