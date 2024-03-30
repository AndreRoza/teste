
exports.up = function(knex) {
  return knex.schema
    .createTable('aaa', async function (table) {
      table.increments('id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('aaa')
};
