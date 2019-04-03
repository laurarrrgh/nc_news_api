const apiRouter = require('express').Router();
const { methodNotAllowed } = require('../errors');
const { sendAllTopics } = require('../controllers/topics');
const { sendAllArticles } = require('../controllers/articles');

apiRouter
  .route('/')
  .get((req, res) => res.send( { "ok": true }))
  .all(methodNotAllowed);

  apiRouter
    .get('/topics', sendAllTopics);

  apiRouter
    .get('/articles', sendAllArticles);

module.exports = apiRouter;
