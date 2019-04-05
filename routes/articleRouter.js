const articleRouter = require('express').Router();

const { sendAllArticles, sendAnArticle } = require('../controllers/articles');

articleRouter
.get('/', sendAllArticles),

articleRouter  
.get('/:article_id', sendAnArticle);


module.exports = articleRouter;