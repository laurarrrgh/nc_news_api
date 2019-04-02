
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', (articlesTable) => {
    articlesTable.increments('article_id').primary();
    articlesTable.string('title').notNullable();
    articlesTable.text('body');
    articlesTable.integer('votes').defaultTo(0);
    articlesTable.string('topic').references('topics.slug'); 
    articlesTable.string('author').references('users.username').notNullable();
    articlesTable.timestamps('created_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
