const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const formsValidations = require('../middleware/validation')

router.post('/', formsValidations , userController.processRegister);

module.exports = router;