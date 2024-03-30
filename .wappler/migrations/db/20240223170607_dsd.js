
exports.up = function(knex) {
  return knex.schema
    .createTable('ola_fefe', async function (table) {
      table.integer('ola_id').unsigned();
      table.foreign('ola_id').references('id').inTable('ola').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ola_fefe_id').unsigned();
      table.foreign('ola_fefe_id').references('').inTable('ola_fefe').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('ola_fefe')
};
