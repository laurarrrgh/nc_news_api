const apiRouter = require('express').Router();
const { methodNotAllowed } = require('../errors');

apiRouter
  .route('/')
  .get((req, res) => res.send( { "ok": true }))
  .all(methodNotAllowed);

  apiRouter
    .get('/topics', (req, res) => {
      res.status(200).send({ msg: 'Topics reached!' })
    });

module.exports = apiRouter;
