exports.seed = async function(knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process sdas
    await trx('sdas').del();
    var sdas = [], sdas_id = null;
    sdas_id = await trx('sdas').insert({oi:"Oii"}, 'id');
    sdas.push(typeof sdas_id[0] === 'object' ? sdas_id[0] : {id: sdas_id[0]})
    sdas_id = await trx('sdas').insert({oi:"Ola"}, 'id');
    sdas.push(typeof sdas_id[0] === 'object' ? sdas_id[0] : {id: sdas_id[0]})

})

};