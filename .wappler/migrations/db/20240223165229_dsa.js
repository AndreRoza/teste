
exports.up = function(knex) {
  return knex.schema
    .createTable('sdas', async function (table) {
      table.increments('id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('sdas')
};
