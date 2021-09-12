const testimonialsDB  = require('../../db/testimonialDatabase.json');

const mainController = {
    home: (req, res) => {
        res.render('home', {testimonials: testimonialsDB});
    },
    forms: (req, res) => {
        res.render('forms');
    },
    product: (req, res) => {
        res.render('product');
    },
    shop: (req, res) => {
        res.render('shop', {testimonials: testimonialsDB});
    },
    underConstruction: (req, res) => {
        res.render('underconstruction');
    },
    formsadmin: (req, res) => {
        res.render('formsadmin');
    }

}

module.exports = mainController;
