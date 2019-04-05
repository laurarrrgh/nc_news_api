const topicRouter = require('express').Router();

const { sendAllTopics } = require('../controllers/topics');

topicRouter
.get('/', sendAllTopics),

module.exports = topicRouter;