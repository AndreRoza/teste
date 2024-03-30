
exports.up = function(knex) {
  return knex.schema
    .dropTable('ola_ola_teste')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('ola_ola_teste', async function (table) {
      table.integer('ola_id').unsigned();
      table.foreign('ola_id').references('id').inTable('ola').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('teste_id').unsigned();
      table.foreign('teste_id').references('id').inTable('teste').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('oi', 255);
    })
};
