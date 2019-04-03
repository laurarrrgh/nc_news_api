process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const supertest = require('supertest');

const app = require('../app');
const connection = require('../db/connection');

const request = supertest(app);

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());

  // routes
  describe('/api', () => {
  //   it('GET status:200', () => {
  //     return request
  //       .get('/api')
  //       .expect(200)
  //       .then(({ body }) => {
  //        console.log({body})
  //         expect(body.ok).to.equal(true);
  //       });
  //   });
  //   it('GET status:200', () => {
  //     return request
  //       .get('/api/topics')
  //       .expect(200) 
  //       .then(({ body }) => {
  //         console.log({body})
  //         expect(body.msg).to.equal('Topics reached!');
  //       })
  //   })
  // });

  describe('/topics', () => {
    it('GET status 200 responds with an array of topics', () => {
      return request  
        .get('/api/topics')
        .expect(200)
        .then(res => {
          expect(res.body.topics).to.be.an('array');
          expect(res.body.topics.length).to.equal(2);  
          expect(res.body.topics[0], res.body.topics[1]).to.contain.keys('slug', 'description'); 
    })
  })
});

  describe.only('/articles', () => {
    it('GET status 200 responds with an array of articles', () => {
      return request
        .get('/api/articles')
        .expect(200)
    })
  });
// resources
// error handling
});
});
