const testimonialsDB = require("../../db/testimonialDatabase.json");
const productsDB = require("../../db/productsDatabase.json");
const utils = require("../utils/utils");
const fs = require("fs");
const path = require("path");

const mainController = {
     
    home: (req, res) => {
        res.render("home", { testimonials: testimonialsDB , user: req.session.userLoged });
    },
    login: (req, res) => {
        res.render("formlogin", {registered: req.query.registered, user: req.session.userLoged});
    },
    register: (req, res) => {
        res.render("formregister", {user: req.session.userLoged });
    },
    terms: (req, res) => {
        res.render("terms");
    },
    shop: (req, res) => {
        res.render("shop", { testimonials: testimonialsDB, products: productsDB, user: req.session.userLoged });
    },
    shopDonas: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopDonas", {
            testimonials: testimonialsDB,
            products: localProductsDB,
            user: req.session.userLoged
        });
    },
    shopCookies: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopCookies", {
            testimonials: testimonialsDB,
            products: localProductsDB,
            user: req.session.userLoged
        });
    },
    shopHelados: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopHelados", {
            testimonials: testimonialsDB,
            products: localProductsDB,
            user: req.session.userLoged
        });
    },
    underConstruction: (req, res) => {
        res.render("underconstruction"), {user: req.session.userLoged};
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
        res.render("adminpanel", { products: products, categories: categories, user: req.session.userLoged});
    },
    formsadmin: (req, res) => {
        res.render("formsadmin");
    },
};

module.exports = mainController;