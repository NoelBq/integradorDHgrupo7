const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const validations = require('../middleware/validation')

// This router is for /user prefix "/" is /user
router.post('/', validations , userController.processRegister);

module.exports = router;