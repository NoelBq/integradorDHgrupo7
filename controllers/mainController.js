const mainController = {
    home: (req, res) => {
        res.render('home');
    },
    forms: (req, res) => {
        res.render('forms');
    },
    product: (req, res) => {
        res.render('product');
    },
    shop: (req, res) => {
        res.render('shop');
    },
    underConstruction: (req, res) => {
        res.render('underconstruction');
    },

}

module.exports = mainController;
