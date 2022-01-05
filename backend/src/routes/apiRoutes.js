const express = require("express");
const router = express.Router();
const apiCrontroller = require('../controllers/apiController');

router.get('/users', apiCrontroller.getUsers);

router.get('/users/count', apiCrontroller.countUsers);
router.get('/user/:id', apiCrontroller.getUserById);
router.get('/products', apiCrontroller.getProducts);
router.get('/product/:id', apiCrontroller.getProductById);
router.get('/orders', apiCrontroller.getOrders)
router.get('/categories', apiCrontroller.getCategories);

module.exports = router;