
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.datetime('date').defaultTo(knex.fn.now()).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.date('date').defaultTo().alter();
    })
};
