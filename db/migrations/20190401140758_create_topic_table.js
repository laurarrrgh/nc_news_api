
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', (topicsTable) => {
    topicsTable.string('slug').unique().primary();
    topicsTable.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics'); 
};
