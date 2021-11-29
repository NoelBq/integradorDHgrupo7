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
    deleteProduct: async function(id) {
        const res = await db.products.destroy(
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