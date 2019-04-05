const { fetchAllArticles, fetchAnArticle, updateVotes } = require('../models/articles.js');

exports.sendAllArticles = (req, res, next) => {
  fetchAllArticles(req.query).then(articles => { 
    res.status(200).send({ articles });
  }).catch(console.log)
};

exports.sendAnArticle = (req, res, next) => {
  fetchAnArticle(req.params).then(([article]) => {
    res.status(200).send({ article });
  }).catch(console.log)
};

exports.patchVotes = (req, res, next) => {
  updateVotes(req.params).then()
}
