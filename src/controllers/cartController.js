const fs = require('fs');
const product = require("../models/Product");
const categories = require("../models/Categories");
const cart = require("../models/Cart");
const path = require("path");
const e = require('express');


const productCart = async(req) => {
    try {
      let productsInCart = 0
      let user = req.session.userLogged; 
      if(user) {
        productsInCart = await product.getAmountProductsByUser(user.id)
        return productsInCart;
      }
      return 0;
    } catch(error) {
      console.log(error);
      return 0;
    }
  };
  

const Cart = {
    cart: async (req, res) => {
        let user = req.session.userLogged; 
        if(!user) {
            res.render('formlogin');
        } else {
            try {
                let id = parseInt(req.body.id);
                const cartArrDTO = [];
                for (let index = 0; index < req.body.quantity; index++) {
                    let cartDTO = {
                        usersId: user.id, 
                        productId: id,
                        createdAt: Date.now()
                    }  
                    cartArrDTO.push(cartDTO);
                }
                const response = await cart.bulkCreate(cartArrDTO);
                console.log('added to cart');
                console.log(response);
                res.status(200).redirect(`/product/${id}`);
            } catch (error) {
                console.log(error);
            }
        }
    },
   
    deleteCartItem:  async (req, res) => { 
        let user = req.session.userLogged; 
        let qty = req.body.qty
        let qtyArr = [];
        let totalPrice = parseInt(req.body.totalPrice);
        try {
            if(qty == 1) {
                await cart.deleteCartItem(req.body.id);
                console.log('product deleted');
            }else {
                for (let index = 0; index < qty; index++) {
                    qtyArr.push(req.body.id)
                }
                await cart.deleteCartItem(qtyArr);
            }
            res.status(200).redirect('/product/checkout');
        } catch (error) {
            console.log(error);
        }
    },
    deleteCart: async (req, res) => {
        
    }
}

module.exports = Cart;