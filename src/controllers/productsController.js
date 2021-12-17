
const fs = require('fs');
const product = require("../models/Product");
const categories = require("../models/Categories");
const cart = require("../models/Cart");
const path = require("path");
const e = require('express');
const products = require('../database/models/products');
const { log } = require('console');
const { LOADIPHLPAPI } = require('dns');

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

const productController = {
  
  product: async (req, res) => {
    let productsCartDTO =  await productCart(req);
    try {
      let productsInCart = 0
      let user = req.session.userLogged; 
      if(user) {
        productsInCart = await product.getAmountProductsByUser(user.id)
      }
      const productByPk = await product.getProductByPk(req.params.id);
      res.render('product', { product: productByPk, user: req.session.userLogged, productsInCart : productsInCart });
      
    } catch (error) {
      console.log(error);
    }
  },
  
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
  
  
  deleteproduct: async (req, res) => {
    try {
      let productDelete = await product.getProductByPk(req.params.id);
      let productImage = productDelete.image;
      console.log(productImage);
      fs.unlinkSync(path.join(__dirname, `../public/${productImage}`));
      product.deleteProduct(req.params.id);
      console.log("Deleted Succesfully");
      res.status(200).redirect('/adminpanel')
    } catch (err) {
      console.error(err);
    }
    
  },
  productEditView: async (req, res) => {
    try {
      let categoriesDTO = await categories.getAllCategories();
      let productDTO = await product.getProductByPk(req.params.id);
      res.render('productEdit', { product: productDTO, categories: categoriesDTO });
    } catch (error) {
      console.log(error)
    }
    
  },
  productEdit: async (req, res) => {
    let productDTO = await product.getProductByPk(req.params.id);
    let stock = parseInt(req.body.stock);
    let price = parseInt(req.body.price);
    let category;
    let imageForm = req.file;
    if (category != undefined) {
      category = req.params.category;
    } else {
      category = productDTO.categoryId;
    }
    
    // let product = localProductsDB.find(p => p.id == req.params.id);
    if (imageForm != undefined) {
      image = `/images/${req.file.filename}`;
    } else {
      image = productDTO.image;
    }
    
    let productToUpdate = {
      productName: req.body.productName,
      stock: stock,
      price: price,
      image: image,
      description: req.body.description,
      categoryId: category,
    }
    try {
      product.updateProduct(productToUpdate, req.params.id)
      // fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(localProductsDB, null, 4));
      console.log("Product Changed Succesfully");
      res.status(200).redirect('/adminpanel');
      
    } catch (err) {
      console.error(err);
    }
  },
  productInsert: async (req, res) => {
    let stock = parseInt(req.body.stock);
    let price = parseInt(req.body.price);
    let category = parseInt(req.body.category);
    let image = `/images/${req.file.filename}`;
    
    let productDTO = {
      productName: req.body.productname,
      stock: stock,
      price: price,
      image: image,
      description: req.body.description,
      categoryId: category,
      createdAt: new Date()
    }
    console.log(productDTO);
    
    try {
      await product.createProduct(productDTO);
      res.status(200).redirect('/adminpanel')
    } catch (error) {
      console.log(error);
    }
    
  },
  checkout: async (req, res) => {
    let user = req.session.userLogged; 
    let id = user.id;
    try {
      let cartDTO = []
      let carts = await cart.getAllProductsInCartByUserId(id);
      carts.forEach((product) => {
        cartDTO.push(product.product)
      })

    console.log(cartDTO);
      let cartsQuantity = carts.length;
      let totalPrice = carts.reduce(function (acc, carts) { return acc + carts.product.price; }, 0);
      res.render("checkout", {user: req.session.userLogged, carts: cartDTO, cartsQuantity: cartsQuantity, totalPrice: totalPrice});
    } catch (error) {
      console.log(error);
    }
  }
  
}

module.exports = productController;
