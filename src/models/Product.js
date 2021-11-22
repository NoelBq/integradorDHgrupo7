const db = require('../database/models');

const Product = {
    getAllProducts: async function () {
        const res = await db.products.findAll({include: [ { 
                    model: db.sequelize.models.categories, as: "category"
                } ] } );
        return res;
    },
    getProduct: async function() {
        // get one product
    }
}

module.exports = Product;