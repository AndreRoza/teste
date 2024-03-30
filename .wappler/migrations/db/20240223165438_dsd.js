
exports.up = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.dropColumn('ds');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.string('ds', 255);
    })
};
