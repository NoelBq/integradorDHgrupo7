const db = require('../database/models');

const Cart = {
    createCart: async function(cart) {
        const res = await db.cart.create(
           cart
        )
        return res;
    },
    bulkCreate: async function(cart) {
        const res = await db.cart.bulkCreate(
           cart
        )
        return res;
    },
    getAllProductsInCartByUserId: async function(userId){
        const res = await db.cart.findAll(
            {
                where: {
                    usersId: userId
                },
                include: [
                    { model: db.sequelize.models.products, as: 'product' },
                ]
            }
        )
        return res;
    },
    deleteCartItem: async function(id) {
        const res = await db.cart.destroy(
            { 
                where: {
                    productId : id
                } 
            }
        )
        return res;
    },
    deleteCart: async function(id) {
        const res = await db.cart.destroy(
            { 
                where: {
                    id : id
                } 
            }
        )
        return res;
    },
}

module.exports = Cart;