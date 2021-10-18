const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const productsDB = require("../../db/productsDatabase.json");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/images"));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({ storage: storage });

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/terms", mainController.terms);
router.get("/shop", mainController.shop);
router.get("/shop/donas", mainController.shopDonas);
router.get("/shop/helados", mainController.shopHelados);
router.get("/shop/cookies", mainController.shopCookies);
router.get("/underconstruction", mainController.underConstruction);
router.get("/formsadmin", mainController.formsadmin);
router.get("/adminpanel", mainController.adminpanel);

module.exports = router;