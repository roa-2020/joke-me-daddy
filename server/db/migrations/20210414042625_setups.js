
exports.up = (knex) => {
  return knex.schema.createTable('setups', table => {
    table.increments('id')
    table.string('setup')
    table.timestamps(true,true)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('setups')
};
