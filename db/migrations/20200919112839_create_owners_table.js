exports.up = function (knex) {
  console.log('creating book owners table');
  return knex.schema.createTable('owners', (ownersTable) => {
    ownersTable.string('owner').primary();
    ownersTable.text('address').notNullable();
    ownersTable.integer('book_count').defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('owners');
};
