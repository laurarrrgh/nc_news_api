const apiRouter = require('express').Router();
const articleRouter = require('./articleRouter');
const { methodNotAllowed } = require('../errors');
const { sendAllTopics } = require('../controllers/topics');

apiRouter
  .route('/')
  .get((req, res) => res.send( { "ok": true }))
  .all(methodNotAllowed);

  apiRouter
    .get('/topics', sendAllTopics);

 apiRouter.use('/articles', articleRouter);
 
module.exports = apiRouter;
