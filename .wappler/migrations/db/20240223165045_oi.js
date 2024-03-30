
exports.up = function(knex) {
  return knex.schema
    .createTable('oii', async function (table) {
      table.increments('id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('oii')
};
