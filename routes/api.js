const apiRouter = require('express').Router();
const { methodNotAllowed } = require('../errors');
const { sendAllTopics } = require('../controllers/topics');
const { sendAllArticles, sendAnArticle } = require('../controllers/articles');

apiRouter
  .route('/')
  .get((req, res) => res.send( { "ok": true }))
  .all(methodNotAllowed);

  apiRouter
    .get('/topics', sendAllTopics);

  apiRouter
    .get('/articles', sendAllArticles),
    
  apiRouter  
    .get('/articles/:article_id', sendAnArticle);

module.exports = apiRouter;
