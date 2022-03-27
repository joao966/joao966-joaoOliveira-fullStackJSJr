const knex = require('./connection');

const getAllUser = async () => {
  try {
    const result = await knex.select('id', 'email').table('users');
    return result;
  } catch (error) {
    console.error('get_all_error: ', error);
  }
};

const getUserByEmail = async (_email) => {};

const createUser = async (_email, _password) => {};

const updateUser = async (_id, _email, _password) => {};

const excludeUser = async (_id) => {};

const getUserById = async (_id) => {};

module.exports = {
  getAllUser,
  getUserByEmail,
  createUser,
  getUserById,
  updateUser,
  excludeUser,
};