const apiRouter = require('express').Router();
const articleRouter = require('./articleRouter');
const topicRouter = require('./topicRouter');
const { methodNotAllowed } = require('../errors');

apiRouter
  .route('/')
  .get((req, res) => res.send( { "ok": true }))
  .all(methodNotAllowed);

  apiRouter.use('/topics', topicRouter);
   // .get('/topics', sendAllTopics);

 apiRouter.use('/articles', articleRouter);

module.exports = apiRouter;
