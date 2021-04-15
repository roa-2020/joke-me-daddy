
exports.up = (knex) => {
  return knex.schema.createTable('setups_punchlines', table => {
    table.increments('id')
    table.integer('setup_id')
    table.integer('punchline_id')
    table.timestamps(true,true)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('setups_punchlines')
};
