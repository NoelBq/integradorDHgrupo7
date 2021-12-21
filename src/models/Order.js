const db = require('../database/models');

const Order = {
    createOrder: async function(order) {
        const res = await db.orders.create(
           order
        )
        return res;
    },
    getAllOrders: async function() {
        const res = await db.orders.findAll({include: [ { 
            model: db.sequelize.models.orderdetail, as: "orderdetail"
        } ] })
        return res;
    },
    getOrdersByUserId: async function(id) {
        const res = await db.orders.findAll(
            { where: { userId: id } }
        )
        return res;
    },
   
}

module.exports = Order;