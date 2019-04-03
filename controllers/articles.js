const { fetchAllArticles } = require('../models/articles.js');

exports.sendAllArticles = (req, res, next) => {
  fetchAllArticles().then(articles => {
    res.status(200).send({articles});
  })
};