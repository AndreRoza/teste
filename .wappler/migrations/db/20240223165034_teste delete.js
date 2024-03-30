
exports.up = function(knex) {
  return knex.schema
    .dropTable('teste_teste_ola')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('teste_teste_ola', async function (table) {
      table.integer('teste_id').unsigned();
      table.foreign('teste_id').references('id').inTable('teste').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ola_id').unsigned();
      table.foreign('ola_id').references('id').inTable('ola').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('qtd', 255);
    })
};
