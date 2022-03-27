const express = require('express');

const userController = require('../controllers');
const { validateUser } = require('../middlewares/validateUser');

const routerUser = express.Router();

routerUser.get('/', userController.getAll);
routerUser.post('/', validateUser, userController.create);

module.exports = routerUser;
