
exports.up = function(knex) {
  return knex.schema
    .table('sdas', async function (table) {
      table.integer('teste').unsigned();
      table.foreign('teste').references('id').inTable('teste').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('sdas', async function (table) {
      table.dropForeign('teste');
      table.dropColumn('teste');
    })
};
