const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const validations = require('../middleware/validation')
const upload = require('../middleware/userMulterMidd');
const userMiddleware = require('../middleware/userMiddleware');

// This router is for /user prefix "/" is /user
router.post('/', upload.single('avatar'), validations, userController.processRegister);
router.post('/login' ,userController.loginProcess);
router.get('/profile', userMiddleware, userController.userProfile);
router.get('/logout', userController.logout);


module.exports = router;