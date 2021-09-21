const testimonialsDB  = require('../../db/testimonialDatabase.json');
const productsDB  = require('../../db/productsDatabase.json');


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
        let categories = [...new Set(productsDB.map(p => p.category))];
        console.log(categories);
        let products = productsDB.filter(p => p.category == req.query.categorySelection);
        res.render('adminpanel', {products: products, categories: categories});
    },
    formsadmin: (req, res) => {
        res.render('formsadmin');
    }

}

module.exports = mainController;