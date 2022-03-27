const service = require('../services');

const getAll = async (_req, res, next) => {
  const result = await service.getAll();
  if (result.isError) {
    return next(result);
  }

  return res.status(200).json({ message: 'success', result });
};

const getById = async (_req, _res, _next) => {};

const create = async (_req, _res, _next) => {};

const update = async (_req, _res, _next) => {};

const exclude = async (_req, _res, _next) => {};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
