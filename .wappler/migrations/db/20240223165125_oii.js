
exports.up = function(knex) {
  return knex.schema
    .createTable('oii_multi', async function (table) {
      table.integer('oii_id').unsigned();
      table.foreign('oii_id').references('id').inTable('oii').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ola_id').unsigned();
      table.foreign('ola_id').references('id').inTable('ola').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('oii_multi')
};
