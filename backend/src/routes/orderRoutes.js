const express = require("express");
const router = express.Router();
const productController = require('../controllers/orderController');
const orderController = require('../controllers/orderController')


router.post('/',  orderController.createOrder);
router.get('/confirmation', orderController.Ordersuccess);

module.exports = router;