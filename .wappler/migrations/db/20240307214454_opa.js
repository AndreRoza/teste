
exports.up = function(knex) {
  return knex.schema
    .table('teste', async function (table) {
      table.string('opa');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('teste', async function (table) {
      table.dropColumn('opa');
    })
};
