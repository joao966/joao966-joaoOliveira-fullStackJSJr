require('dotenv');
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
   client: 'postgresql',
   connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'project_contele',
      user: 'joao_gui',
      password: 'joao_gui',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'users',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'project_contele',
      user: 'joao_gui',
      password: 'joao_gui',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'users',
    },
  },

};
