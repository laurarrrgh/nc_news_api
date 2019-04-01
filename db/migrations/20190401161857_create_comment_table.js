
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (commentsTable) => {
    commentsTable.increments('comment_id').primary();
    commentsTable.string('author').references('users.username').notNullable();
    commentsTable.integer('article_id').references('articles.article_id');
    commentsTable.integer('votes').defaultTo(0);
    commentsTable.timestamps('created_at');
    commentsTable.text('body');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.sropTable('comments');
};
