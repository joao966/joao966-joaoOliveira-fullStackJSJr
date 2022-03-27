const Joi = require('@hapi/joi');

const validateUser = (req, _res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(req.body);
  
  if (error) {
    return next({
      isJoi: true,
      message: error.details[0].message,
    }); 
  }

  next();
};

module.exports = { validateUser };
