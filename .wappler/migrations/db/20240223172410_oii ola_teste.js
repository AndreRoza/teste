
exports.up = function(knex) {
  return knex.schema
    .table('ola_ola_teste', async function (table) {
      table.string('oi');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola_ola_teste', async function (table) {
      table.dropColumn('oi');
    })
};
