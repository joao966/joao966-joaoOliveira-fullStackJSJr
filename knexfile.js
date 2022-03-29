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
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      tableName: 'users',
      directory: `${__dirname}/src`,
    },
  },

};
