exports.seed = async (knex) => {
  await knex('users').del();
  await knex('users').insert([
        { email: 'adalovelace@email.com ', password: '123456' },
        { email: 'vonneumann@email.com ', password: '123456' },
        { email: 'turing@email.com ', password: '123456' },
      ]);
};