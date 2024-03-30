
exports.up = function(knex) {
  return knex.schema
    .dropTable('oii')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('oii', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('lls', 255);
      table.string('sadas', 255);
      table.string('dd', 255);
    })
};
