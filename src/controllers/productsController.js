
const productsDB  = require('../../db/productsDatabase.json');


const productController = {
    product: (req, res) => {
        res.render('product', { product: productsDB.find((p) => p.id == req.params.id) });
    }
}

module.exports = productController;