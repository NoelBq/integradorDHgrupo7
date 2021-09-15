const express = require("express");
const router = express.Router();
const productController = require('../controllers/productsController');
const productsDB  = require('../../db/productsDatabase.json');

router.get('/:id', productController.product);


module.exports = router;