const express = require('express');

const userController = require('../controllers');

const routerUser = express.Router();

routerUser.get('/', userController.getAll);

module.exports = routerUser;
