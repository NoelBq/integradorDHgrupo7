const express = require("express");
const router = express.Router();
const productController = require('../controllers/productsController');
const upload = require('../middleware/multermidd')
const userMiddleware = require('../middleware/userMiddleware');

router.get('/checkout', productController.checkout);
router.get('/:id', productController.product);
router.delete('/:id/delete', productController.deleteproduct);
router.post('/', upload.single('addimages'), productController.productInsert);
router.get('/edit/:id', productController.productEditView);
router.put('/edit/:id',upload.single("image"), productController.productEdit);

module.exports = router;