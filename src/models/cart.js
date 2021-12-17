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
}

module.exports = Cart;