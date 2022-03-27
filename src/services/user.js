const { getAllUser } = require('../models');

const { errorGeneric } = require('../helpers/errors');

const getAll = async () => {
  const result = await getAllUser();
  if (!result) {
    return errorGeneric('Ops. Algo deu errado!');
  }
  return result;
};

const getById = async (_id) => {};

const validadeCreate = async (_email, _password) => {};

const validateUpdate = async (_id, _email, _password) => {};

const validateExclude = async (_id, _email, _password) => {};

module.exports = { getAll, validadeCreate, validateUpdate, validateExclude, getById };
