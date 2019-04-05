process.env.NODE_ENV = 'test';

const chai = require('chai')
const chaiSorted = require('chai-sorted');
const { expect } = chai;
const supertest = require('supertest');

chai.use(chaiSorted);

const app = require('../app');
const connection = require('../db/connection');

const request = supertest(app);

describe.only('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());

  // routes
  describe('/api', () => {

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

  describe('/articles', () => {
    it('GET status 200 responds with an array of articles', () => {
      return request
        .get('/api/articles')
        .expect(200)
        .then(res => {
          expect(res.body.articles.length).to.equal(12);
          expect(res.body.articles[0]).to.contain.keys('author', 'title', 'article_id', 'topic', 'created_at', 'votes', 'comment_count');
          expect(res.body.articles[0].comment_count).to.equal('13');
        })
      })
     it('articles are sorted in descending order by default', () => {
      return request
        .get('/api/articles?sort_by=created_at')
        .expect(200)
        .then(res => {
          expect(res.body.articles).that.be.descendingBy('created_at');
            })
    })
      it('GET status 200 responds with a specific article referenced by article id', () => {
        return request
          .get('/api/articles/1')
          .expect(200)
          .then(res => {
            expect(res.body.article).to.contain.keys('author', 'title', 'article_id', 'topic', 'created_at', 'votes', 'comment_count');
          //   expect(res.body.article).to.equal(
          //    {
          //       title: 'Living in the shadow of a great man',
          //       topic: 'mitch',
          //       author: 'butter_bridge',
          //       body: 'I find this existence challenging',
          //       created_at: 1542284514171,
          //       votes: 100,
          // } )

      })
  })
})
  })
})
  //   describe('QUERIES', () => {
  //     // it('GET status 200 filters the article by given topic', () => {
  //     //   return request  
  //     //     .get('/api/articles?..')
  //     //     .expect(200)
  //     //     .then(res => {
  //     //       expect()
  //         })
  //       });
  //     // it('GET status 200 filters the article by given username', () => {
  //       // return request
  //       //  .get('/api/articles?..')
  //       //  .expect(200)
  //       //  .then(res => { expect()})
  //     // })
  //     // it('GET status 200 can be sorted by any valid column', () => {})
  //     // it('GET status 200 can sort by ascending and descending' () => {})
  // });

  
  // });
// resources
// error handling
// });