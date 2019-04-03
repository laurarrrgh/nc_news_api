const { articleData, commentData, topicData, userData } = require('../data');
const { createNewTimeFormat } = require('../../utils/create-new-time-format');

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
     // format comment data
     // return knex('comments').insert(commentData).returning('*')
  })
};


// need util for changing timestamp into a date
// need util for author being username (created by in data file)
// n.b.  belongs_to is article title from comment to article - need to create reference object super complicated - DOUBLE CHECK LAURA