const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', (req, res) => userController.createUser(req, res));

module.exports = router;