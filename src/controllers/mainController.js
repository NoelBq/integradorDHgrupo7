const testimonialsDB  = require('../../db/testimonialDatabase.json');
const productsDB  = require('../../db/productsDatabase.json');


const mainController = {
    home: (req, res) => {
        res.render('home', {testimonials: testimonialsDB});
    },
    forms: (req, res) => {
        res.render('forms');
    },
    product: (req, res) => {
        res.render('product', { product: productsDB.find((p) => p.id == req.params.id) });
    },
    shop: (req, res) => {
        res.render('shop', {testimonials: testimonialsDB, products: productsDB});
    },
    underConstruction: (req, res) => {
        res.render('underconstruction');
    },
    formsadmin: (req, res) => {
        res.render('formsadmin');
    }

}

module.exports = mainController;