
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('boaa');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('boaa');
    })
};
