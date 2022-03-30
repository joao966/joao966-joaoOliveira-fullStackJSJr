require('dotenv');
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// console.log('env:', process.env.POSTGRES_USER);
module.exports = {
  development: {
   client: 'postgresql',
   connection: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/migrations',
    },
    seeds: {
      directory: './src/seeds',
  },
  },
};
