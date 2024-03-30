
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('ola');
      table.dropColumn('ds');
      table.dropColumn('undefined');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('ola', 255);
      table.string('ds', 255);
      table.string('undefined', 255);
    })
};
