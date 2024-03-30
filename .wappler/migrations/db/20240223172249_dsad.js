
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('ds');
      table.string('undefined');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('ds');
      table.dropColumn('undefined');
    })
};
