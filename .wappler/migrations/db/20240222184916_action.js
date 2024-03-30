
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('action');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('action');
    })
};
