
exports.up = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.string('id_pagamento');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ola', async function (table) {
      table.dropColumn('id_pagamento');
    })
};
