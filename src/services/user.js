const { getAllUser, getUserByEmail, createUser } = require('../models');

const { errorGeneric, errorBusiness } = require('../helpers/errors');

const getAll = async () => {
  const result = await getAllUser();
  if (!result) {
    return errorGeneric('Ops. Algo deu errado!');
  }
  return result;
};

const getById = async (_id) => {};

const validadeCreate = async (email, password) => {
  const isUser = await getUserByEmail(email);
 
  if (isUser.length) {
    return errorBusiness('User already registered');
  }
 
  const userCreated = await createUser(email, password);

  return userCreated;
};

const validateUpdate = async (_id, _email, _password) => {};

const validateExclude = async (_id, _email, _password) => {};

module.exports = { getAll, validadeCreate, validateUpdate, validateExclude, getById };
