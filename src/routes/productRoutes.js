const express = require("express");
const router = express.Router();
const productController = require('../controllers/productsController');
const productsDB  = require('../../db/productsDatabase.json');

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/:id', productController.product);
router.delete('/:id/delete', productController.deleteproduct);

router.get('/edit/:id', productController.productEditView);
router.put('/edit/:id',upload.single("img"), productController.productEdit);

module.exports = router;