const db = require('../database/models');

const OrderDetail = {
    createOrderDetail: async function(orderDetail) {
        const res = await db.orderdetail.create(
           orderDetail
        )
        return res;
    },
    createBulkOrderDetail: async function(orderDetail) {
        const res = await db.orderdetail.bulkCreate(
           orderDetail
        )
        return res;
    },
    getOrderByUser: async function(orderDetail) {
        const res = await db.orderdetail.create(
           orderDetail
        )
        return res;
    },

}

module.exports = OrderDetail;