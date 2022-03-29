const configKenex = require('../../knexfile');

/* eslint-disable */ 
const knex = require('knex')(configKenex.development);

// knex.raw('CREATE DATABASE IF NOT EXISTS', 'banco_project_contele').then((e) => {
//   console.log("aqui:", e)
// }).catch((e) => console.log("erroraqui:", e))

knex.raw('SELECT 1').then(() => {
  console.log('PostgreSQL connected');
})
.catch((e) => {
  console.log('PostgreSQL not connected');
  console.error(e);
});

module.exports = knex;
