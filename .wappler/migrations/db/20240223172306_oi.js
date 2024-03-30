
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('oi');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('oi');
    })
};
