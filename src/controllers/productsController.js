
let productsDB = require('../../db/productsDatabase.json');
const fs = require('fs');
const product = require("../models/Product");
const categories = require("../models/Categories");
const path = require("path");
const utils = require('../utils/utils');

const { v4: uuidv4 } = require('uuid');

const productController = {
  
  product: async (req, res) => {
    const productByPk = await product.getProductByPk(req.params.id);
    res.render('product', { product: productByPk, user: req.session.userLogged });
  },
  
  deleteproduct: async (req, res) => {
    // let productToDelete = await product.getProductByPk(req.params.id)
    // let localProductsDB = utils.parseJS(productsDB);
    // let filteredProductsDB = localProductsDB.filter(p => p.id != req.params.id);
    // let productToDelete = localProductsDB.find(p => p.id == req.params.id);
    try {
     let productDelete = await product.getProductByPk(req.params.id);
     let productImage = productDelete.image;
     console.log(productImage);
      // fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(filteredProductsDB, null, 4));
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
      
    }
    console.log(error);
    
  },
  productEdit: (req, res) => {
    let localProductsDB = utils.parseJS(productsDB);
    const file = req.file;
    const body = req.body;
    let product = localProductsDB.find(p => p.id == req.params.id);
    if (file != undefined) {
      product['img'] = `${file.filename}`
    } else {
      product['img'] = product.img
    }
    Object.keys(product).forEach(k => {
      product[k] = body[k] || product[k];
    });
    try {
      fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(localProductsDB, null, 4));
      console.log("Product Changed Succesfully");
    } catch (err) {
      console.error(err);
    }
    res.status(200).render('/adminpanel')
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
    
  }
}

module.exports = productController;
