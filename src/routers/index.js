const express = require('express');

const routerUser = require('./user');

const router = express.Router();

router.get('/', (_req, res) => res.status(200).json({ message: 'Welcome in API' }));
router.use('/api/v1/users', routerUser);

module.exports = router;
