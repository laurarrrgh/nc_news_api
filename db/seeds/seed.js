const { articleData, commentData, topicData, userData } = require('../data');
const { createNewTimeFormat } = require('../../utils/create-new-time-format');
const { createNewTimeFormatComments } = require('../../utils/create-new-time-format-comments.js');
const { formatUsernameToAuthor } = require('../../utils/format-username-to-author.js')

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
     const formatCommentTime = createNewTimeFormatComments(commentData);
      return knex('comments').insert(formatCommentTime).returning('*') 
    .catch(console.log); // <------ will not work without catch???
});
};



// need util for changing timestamp into a date - TICK
// need util for author being username (created by in data file)
// n.b.  belongs_to is article title from comment to article - need to create reference object super complicated - DOUBLE CHECK LAURA