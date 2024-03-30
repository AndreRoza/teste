
exports.up = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.string('lls');
      table.string('sadas');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.dropColumn('lls');
      table.dropColumn('sadas');
    })
};
