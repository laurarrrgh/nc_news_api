const { articleData, commentData, topicData, userData } = require('../data');
const { createNewTimeFormat } = require('../../utils/create-new-time-format');

exports.seed = (knex, Promise) => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex('topics').insert(topicData).returning('*'))
    .then((topicRows) => {
      console.log(topicRows) 
      return knex('users').insert(userData).returning('*')
    })
      .then((userRows) => {
      console.log(userRows)
      const formatTime = createNewTimeFormat(articleData);
      return knex('articles').insert(formatTime).returning('*')
    })
  .then((articleRows) => {
     console.log(articleRows) 
     // format comment data
     // return knex('comments').insert(constAbove).returning('*')
  })
};


// need util for changing timestamp into a date
// need util for author being username (created by in data file)
// n.b.  belongs_to is article title - need to create reference object