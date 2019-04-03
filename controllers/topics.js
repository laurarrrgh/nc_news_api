const { fetchAllTopics } = require('../models/topics.js') 

exports.sendAllTopics = (req, res, next) => {
  fetchAllTopics().then(topics => {
    res.status(200).send({topics});
  });
};