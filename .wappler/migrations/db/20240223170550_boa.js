
exports.up = function(knex) {
  return knex.schema
    .dropTable('ola_boa')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('ola_boa', async function (table) {
      table.increments('id').primary().notNullable();
      table.integer('ola_id').unsigned();
      table.foreign('ola_id').references('id').inTable('ola').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('boa', 255);
    })
};
