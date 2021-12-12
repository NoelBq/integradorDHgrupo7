const db = require('../database/models');

const Cart = {
    createCart: async function(cart) {
        const res = await db.cart.create(
           cart
        )
        return res;
    },
    getAllCarts: async function(){
        const res = await db.cart.findAll()
        return res;
    }
}

module.exports = Cart;