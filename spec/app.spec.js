process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const supertest = require('supertest');

const app = require('../app');
const connection = require('../db/connection');

const request = supertest(app);

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());

  describe.only('/api', () => {
    it('GET status:200', () => {
      return request
        .get('/api')
        .expect(200)
        .then(({ body }) => {
          console.log({body})
          expect(body.ok).to.equal(true);
        });
    });
    // it('GET status:200', () => {
    //   return request
    //     .get('/api/topics')
    //     .expect(200)
    //     .then(({ body }) => {
    //       expect()
    //     })
    // })
  });
});
