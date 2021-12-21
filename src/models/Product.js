const db = require('../database/models');

const Product = {
    getAmountProductsByUser: async function (id) {
        const res = await db.cart.count(
            { where: { usersId: id } }
        )
        return res;
    },
    getAllProducts: async function () {
        const res = await db.products.findAll({include: [ { 
                    model: db.sequelize.models.categories, as: "category"
                } ] } );
        return res;
    },
    getProductByPk: async function(id) {
        const res = await db.products.findByPk(id);
        return res;
    },
    getProductByCategoryId: async function(id) {
        const res = await db.products.findAll(
            { where: { categoryId: id } }
        )
        return res;
    },
    createProduct: async function(product) {
        const res = await db.products.create(
           product
        )
        return res;
    },

    updateProduct: async function(product, id) {
        const res = await db.products.update(product,
            { 
                where: {
                    id : id
                } 
            }
        )
        return res;
    },
    
    

}

module.exports = Product;