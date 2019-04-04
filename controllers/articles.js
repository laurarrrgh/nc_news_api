const { fetchAllArticles, fetchAnArticle } = require('../models/articles.js');

exports.sendAllArticles = (req, res, next) => {
  fetchAllArticles(req.query).then(articles => { 
    res.status(200).send({ articles });
  }).catch(console.log)
};

exports.sendAnArticle = (res, req, next) => {
  fetchAnArticle(req.query).then(articles => {
    res.status(200).send({ article });
  }).catch(console.log)
};
