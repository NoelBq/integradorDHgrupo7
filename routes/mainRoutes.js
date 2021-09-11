const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/forms', mainController.forms);
router.get('/shop', mainController.shop);
router.get('/product', mainController.product);
router.get('/underconstruction', mainController.underConstruction);
router.get('/formsadmin', mainController.formsadmin);


module.exports = router;
