const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const validations = require('../middleware/validation')
const upload = require('../middleware/userMulterMidd');

// This router is for /user prefix "/" is /user
router.post('/', validations, userController.processRegister);
router.post('/login' ,userController.loginProcess);
router.get('/profile', userController.userProfile);

module.exports = router;