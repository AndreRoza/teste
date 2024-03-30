
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('dd');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('dd');
    })
};
