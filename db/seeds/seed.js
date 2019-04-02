const { articleData, commentData, topicData, userData } = require('../data');

exports.seed = (knex, Promise) => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex('topics').insert(topicData).returning('*')).then((topicRows) => console.log(topicRows))
    .then(() => {
     return knex('users').insert(userData).returning('*')
    // .then(() => {
    });
};

// .then(() => { return knex('articles').insert(articleData).returning('*') })
// const formatTime 
// need util for changing timestamp into a date
// .then(() => { return knex('comments').insert(commentData).returning('*' ) })
// need util for changing timestamp into a date
// need util for author being username (created by in data file)
// n.b.  belongs_to is article title