
const fs = require('fs');
const product = require("../models/Product");
const categories = require("../models/Categories");
const cart = require("../models/Cart");
const order = require("../models/Order");
const orderDetail = require("../models/OrderDetail");
const orderdetail = require('../database/models/orderdetail');
const OrderDetail = require('../models/OrderDetail');
const { createCart } = require('../models/Cart');


const Order = {
    Ordersuccess: (req, res) => {
        let user = req.session.userLogged;
        res.render('success', {user: user});
    },
    
    createOrder: async (req, res) => {
        let productsInCart = 0;
        let user = req.session.userLogged; 
        let id = user.id;
        let state = "En preparacion";
        try {
            let carts = await cart.getAllProductsInCartByUserId(id);
            let totalPrice = carts.reduce(function (acc, carts) { return acc + carts.product.price; }, 0);

            let cartsIds = [];
            carts.forEach(element => {
                cartsIds.push(element.id)
            });
            let orderDTO = {
                usersId: id,
                state: state, 
                totalPrice: totalPrice,
                createdAt: Date.now()
                
            }
            let orderToCreate = await order.createOrder(orderDTO);
            let orderId = orderToCreate.id
            
            let orderDetailDTO = carts.reduce((acc, curr) => {
                curr = curr.get({plain: true});
                let obj = acc.find(el => el.productId == curr.id)
                if (!obj) {
                    curr.quantity = 1;
                    curr.productId = curr.product.id
                    curr.orderId = orderId;
                    acc.push(curr);
                } else {
                    obj.quantity++
                }
                return acc
            }, [])
          
        
          await OrderDetail.createBulkOrderDetail(orderDetailDTO);
          await cart.deleteCart(cartsIds);
         res.status(200).redirect('/order/confirmation')
        
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Order;