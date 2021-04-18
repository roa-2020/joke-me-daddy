
exports.up = (knex) => {
  return knex.schema.createTable('punchlines', table => {
    table.increments('id')
    table.string('punchline')
    table.timestamps(true,true)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('punchlines')
};
