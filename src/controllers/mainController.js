const testimonialsDB = require("../../db/testimonialDatabase.json");
const product = require("../models/Product");
const utils = require("../utils/utils");
const fs = require("fs");
const path = require("path");

const mainController = {
    home: (req, res) => {
        res.render("home", { testimonials: testimonialsDB , user: req.session.userLogged });
    },
    login: (req, res) => {
        res.render("formlogin", {registered: req.query.registered, user: req.session.userLogged});
    },
    register: (req, res) => {
        res.render("formregister", {user: req.session.userLogged });
    },
    terms: (req, res) => {
        res.render("terms");
    },
    shop: async (req, res) => {
        const products = await product.getAllProducts();
        res.render("shop", { testimonials: testimonialsDB, products: products, user: req.session.userLogged });
    },
    shopDonas: async (req, res) => {
        const products = await product.getAllProducts();
        res.render("shopDonas", {
            testimonials: testimonialsDB,
            products: products,
            user: req.session.userLogged
        });
    },
    shopCookies: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopCookies", {
            testimonials: testimonialsDB,
            products: localProductsDB,
            user: req.session.userLogged
        });
    },
    shopHelados: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopHelados", {
            testimonials: testimonialsDB,
            products: localProductsDB,
            user: req.session.userLogged
        });
    },
    underConstruction: (req, res) => {
        res.render("underconstruction"), {user: req.session.userLogged};
    },
    adminpanel: (req, res) => {
        let localProductsDB = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../../db/productsDatabase.json"), {
                encoding: "utf8",
                flag: "r",
            })
        );
        let categories = [...new Set(localProductsDB.map((p) => p.category))];
        let products = localProductsDB.filter(
            (p) => p.category == req.query.categorySelection
        );
        res.render("adminpanel", { products: products, categories: categories, user: req.session.userLogged});
    },
    formsadmin: (req, res) => {
        res.render("formsadmin", {user: req.session.userLogged});
    },
    checkout: (req, res) => {
        res.render("checkout", {user: req.session.userLogged});
    }
};

module.exports = mainController;