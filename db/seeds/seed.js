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
      console.log(`${topics.length} topics inserted`) 
      return knex('users').insert(userData).returning('*')
    })
      .then((users) => {
      console.log(`${users.length} users inserted`)
      const formatTime = createNewTimeFormat(articleData);
      return knex('articles').insert(formatTime).returning('*')
    })
  .then((articles) => {
      console.log(`${articles.length} articles inserted`) 
     const referenceObject = createReferenceObject(articles)
     const formatCommentTime = createNewTimeFormatComments(commentData, referenceObject);
      return knex('comments').insert(formatCommentTime).returning('*') 
      //console.log(`${comments.length} comments inserted`)
    .catch(console.log);
});
};