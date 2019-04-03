const knex = require('../db/connection');

exports.fetchAllArticles = () => {
  return knex('articles').select('*');
}