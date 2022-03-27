exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('email');
        table.string('password');
        });
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users');
};