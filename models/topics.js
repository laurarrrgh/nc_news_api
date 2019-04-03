const knex = require('../db/connection');

exports.fetchAllTopics = () => {
  return knex('topics').select('*');
}