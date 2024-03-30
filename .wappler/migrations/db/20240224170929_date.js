
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('data');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('data', 255);
    })
};
