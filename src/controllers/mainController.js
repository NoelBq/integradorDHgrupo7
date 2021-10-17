const testimonialsDB = require("../../db/testimonialDatabase.json");
const productsDB = require("../../db/productsDatabase.json");
const utils = require("../utils/utils");
const fs = require("fs");
const path = require("path");

const mainController = {
    home: (req, res) => {
        res.render("home", { testimonials: testimonialsDB });
    },
    login: (req, res) => {
        res.render("formlogin");
    },
    register: (req, res) => {
        res.render("formregister");
    },
    terms: (req, res) => {
        res.render("terms");
    },
    shop: (req, res) => {
        res.render("shop", { testimonials: testimonialsDB, products: productsDB });
    },
    shopDonas: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopDonas", {
            testimonials: testimonialsDB,
            products: localProductsDB,
        });
    },
    shopCookies: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopCookies", {
            testimonials: testimonialsDB,
            products: localProductsDB,
        });
    },
    shopHelados: (req, res) => {
        let localProductsDB = utils.parseJS(productsDB);
        res.render("shopHelados", {
            testimonials: testimonialsDB,
            products: localProductsDB,
        });
    },
    underConstruction: (req, res) => {
        res.render("underconstruction");
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
        res.render("adminpanel", { products: products, categories: categories });
    },
    formsadmin: (req, res) => {
        res.render("formsadmin");
    },
};

module.exports = mainController;