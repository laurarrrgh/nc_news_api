
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', (topicsTable) => {
    topicsTable.string.unique().primary();
    topicsTable.text;
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics'); 
};
