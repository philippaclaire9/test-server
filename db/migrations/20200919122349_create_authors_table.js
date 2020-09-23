exports.up = function (knex) {
  // return knex.schema.createTable('authors', (authorsTable) => {
  //   authorsTable.string('author').primary();
  //   authorsTable.string('owner').references('owners.owner');
  // });
};

exports.down = function (knex) {
  return knex.schema.dropTable('authors');
};
