const express = require("express");
const router = express.Router();
const cartController = require('../controllers/cartController');


router.post('/',  cartController.cart);
router.post('/deleteItem', cartController.deleteCartItem);


module.exports = router;