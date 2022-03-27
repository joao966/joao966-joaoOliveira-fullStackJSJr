const service = require('../services');

const getAll = async (_req, res, next) => {
  const result = await service.getAll();
  if (result.isError) {
    return next(result);
  }

  return res.status(200).json({ message: 'success', result });
};

const getById = async (_req, _res, _next) => {};

const create = async (req, res, next) => {
  const { email, password } = req.body;

  const createdUser = await service.validadeCreate(email, password);

  if (createdUser.isError) {
    return next(createdUser);
  }

  const newUser = {
    email,
    password,
  };

  return res.status(201).json({ message: 'usuário criado com sucesso!', user: newUser });
};

const update = async (_req, _res, _next) => {};

const exclude = async (_req, _res, _next) => {};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
