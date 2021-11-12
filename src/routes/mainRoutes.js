const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const guestMiddleware = require('../middleware/guestMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const pruebaController = require("../controllers/pruebaController");


router.get("/", mainController.home);
router.get("/login", guestMiddleware, mainController.login);
router.get("/register", guestMiddleware,  mainController.register);
router.get("/terms", mainController.terms);
router.get("/shop", mainController.shop);
router.get("/shop/donas", mainController.shopDonas);
router.get("/shop/helados", mainController.shopHelados);
router.get("/shop/cookies", mainController.shopCookies);
router.get("/shop/checkout", mainController.checkout);
router.get("/underconstruction", mainController.underConstruction);
router.get("/formsadmin", mainController.formsadmin);
router.get("/adminpanel", adminMiddleware,mainController.adminpanel);
router.get("/pruebadb",pruebaController.getAll);

module.exports = router;