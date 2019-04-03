const { articleData, commentData, topicData, userData } = require('../data');
const { createNewTimeFormat } = require('../../utils/create-new-time-format');
const { createNewTimeFormatComments } = require('../../utils/create-new-time-format-comments.js');
const { createReferenceObject } = require('../../utils/reference-object.js')

exports.seed = (knex, Promise) => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex('topics').insert(topicData).returning('*'))
    .then((topics) => {
      return knex('users').insert(userData).returning('*')
    })
      .then((users) => {
      const formatTime = createNewTimeFormat(articleData);
      return knex('articles').insert(formatTime).returning('*')
    })
  .then((articles) => {
     const referenceObject = createReferenceObject(articles)
     const formatCommentTime = createNewTimeFormatComments(commentData, referenceObject);
      return knex('comments').insert(formatCommentTime).returning('*') 
    .catch(console.log);
});
};