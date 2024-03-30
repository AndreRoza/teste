
exports.up = function(knex) {
  return knex.schema
    .dropTable('oii_multi')
    .table('oii', async function (table) {
      table.string('ds');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('oii', async function (table) {
      table.dropColumn('ds');
    })
    .createTable('oii_multi', async function (table) {
      table.integer('oii_id').unsigned();
      table.foreign('oii_id').references('id').inTable('oii').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('ola_id').unsigned();
      table.foreign('ola_id').references('id').inTable('ola').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
