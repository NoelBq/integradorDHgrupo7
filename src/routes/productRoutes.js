const express = require("express");
const router = express.Router();
const productController = require('../controllers/productsController');
const productsDB  = require('../../db/productsDatabase.json');

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/img"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.get('/:id', productController.product);
router.delete('/:id/delete', productController.deleteproduct);

router.get('/edit/:id', productController.productEdit);

module.exports = router;