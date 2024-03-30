
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('ola');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('ola');
    })
};
