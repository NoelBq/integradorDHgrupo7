const express = require("express");
const router = express.Router();
const productController = require('../controllers/productsController');
const productsDB  = require('../../db/productsDatabase.json');
const upload = require('../../middleware/multermidd')

router.get('/:id', productController.product);
router.delete('/:id/delete', productController.deleteproduct);

router.get('/edit/:id', productController.productEditView);
router.put('/edit/:id',upload.single("img"), productController.productEdit);
router.post('/',upload.single('addimages'), productController.insert)

module.exports = router;