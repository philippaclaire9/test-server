exports.up = function (knex) {
  return knex.schema.createTable('books', (booksTable) => {
    booksTable.string('title').primary();
    booksTable.string('author').notNullable();
    booksTable.string('owner').references('owners.owner');
    booksTable.text('blurb');
    booksTable.boolean('available').defaultTo(false).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('books');
};
