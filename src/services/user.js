const { getAllUser,
  getUserByEmail,
  createUser,
  getUserById,
  updateUser,
  excludeUser,
} = require('../models');

const { errorGeneric, errorBusiness, notFound } = require('../helpers/errors');

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

const validateUpdate = async (id, email, password) => {
  const isUser = await getUserById(id);
 
  if (!isUser.length) {
    return notFound('User not found');
  }

  const userCreated = await updateUser(id, email, password);

  return userCreated;
};

const validateExclude = async (id, email, password) => {
  const isUser = await getUserById(id);

  if (!isUser.length) {
    return notFound('User not found');
  }

  const userCreated = await excludeUser(id, email, password);

  return userCreated;
};

module.exports = { getAll, validadeCreate, validateUpdate, validateExclude, getById };
