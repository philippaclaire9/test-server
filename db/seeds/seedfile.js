const { ownersData, booksData } = require('../data/index');

exports.seed = function (knex) {
  return knex
    .insert(ownersData, ['*'])
    .into('owners')
    .then((insertedOwners) => {
      return knex.insert(booksData, ['*']).into('books');
    });
};
