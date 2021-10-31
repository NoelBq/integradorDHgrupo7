const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const guestMiddleware = require('../middleware/guestMiddleware')


router.get("/", mainController.home);
router.get("/login",  mainController.login);
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