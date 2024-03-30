
exports.up = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.string('dd');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.dropColumn('dd');
    })
};
