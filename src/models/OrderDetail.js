const db = require('../database/models');

const OrderDetail = {
    createOrderDetail: async function(orderDetail) {
        const res = await db.orderdetail.create(
           order
        )
        return res;
    },

}

module.exports = OrderDetail;