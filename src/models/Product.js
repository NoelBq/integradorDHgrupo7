const db = require('../database/models');

const Product = {
    getAllProducts: async function () {
        const res = await db.products.findAll({include: [ { 
                    model: db.sequelize.models.categories, as: "category"
                } ] } );
        return res;
       
    },
    getProductByPk: async function(id) {
        const res = await db.products.findByPk(id);
return res;
    }
}


module.exports = Product;
console.log(Product.getAllProducts());