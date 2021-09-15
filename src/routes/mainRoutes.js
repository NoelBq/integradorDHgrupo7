const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsDB  = require('../../db/productsDatabase.json');


router.get('/', mainController.home);
router.get('/forms', mainController.forms);
router.get('/shop', mainController.shop);
router.get('/underconstruction', mainController.underConstruction);
router.get('/formsadmin', mainController.formsadmin);


module.exports = router;