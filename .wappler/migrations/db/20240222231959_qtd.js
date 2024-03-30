
exports.up = function(knex) {
  return knex.schema
    .table('teste_teste_ola', async function (table) {
      table.string('qtd');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('teste_teste_ola', async function (table) {
      table.dropColumn('qtd');
    })
};
