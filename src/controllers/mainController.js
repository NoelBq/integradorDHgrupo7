const testimonialsDB  = require('../../db/testimonialDatabase.json');
const productsDB  = require('../../db/productsDatabase.json');
const fs = require('fs');
const path = require('path');


const mainController = {
    home: (req, res) => {
        res.render('home', {testimonials: testimonialsDB});
    },
    forms: (req, res) => {
        res.render('forms');
    },
    shop: (req, res) => {
        res.render('shop', {testimonials: testimonialsDB, products: productsDB});
    },
    underConstruction: (req, res) => {
        res.render('underconstruction');
    },
    adminpanel: (req, res) => {
        let localProductsDB = JSON.parse(fs.readFileSync(path.join(__dirname,'../../db/productsDatabase.json'), {encoding:'utf8', flag:'r'})); 
        let categories = [...new Set(localProductsDB.map(p => p.category))];
        let products = localProductsDB.filter(p => p.category == req.query.categorySelection);
        res.render('adminpanel', {products: localProductsDB, categories: categories});
    },
    formsadmin: (req, res) => {
        res.render('formsadmin');
    }

}

module.exports = mainController;