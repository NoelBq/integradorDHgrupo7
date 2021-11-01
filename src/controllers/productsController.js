
let productsDB = require('../../db/productsDatabase.json');
const fs = require('fs');
const path = require("path");
const utils = require('../utils/utils');
const { v4: uuidv4 } = require('uuid');

const productController = {

  product: (req, res) => {
    res.render('product', { product: productsDB.find((p) => p.id == req.params.id), user: req.session.userLogged });
  },
  deleteproduct: (req, res) => {
    let localProductsDB = utils.parseJS(productsDB);
    let filteredProductsDB = localProductsDB.filter(p => p.id != req.params.id);
    let productToDelete = localProductsDB.find(p => p.id == req.params.id);
    try {
      fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(filteredProductsDB, null, 4));
      fs.unlinkSync(path.join(__dirname, `../public/images/${productToDelete.img}`));
      console.log("Deleted Succesfully");
    } catch (err) {
      console.error(err);
    }
    res.status(200).redirect('/adminpanel')
  },
  productEditView: (req, res) => {
    let localProductsDB = utils.parseJS(productsDB);
    let categories = [...new Set(localProductsDB.map(p => p.category))];
    let product = localProductsDB.find(p => p.id == req.params.id);
    res.render('productEdit', { product: product, categories: categories });
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
    res.status(200).redirect('/adminpanel')
  },
  productInsert: (req,res) =>{
    let localProductsDB = utils.parseJS(productsDB);
    let {productname,description,category,addprice} = req.body;
    localProductsDB.push({
      id: uuidv4(),
      name: productname,
      description: description,
      category: category,
      img: req.file.filename,
      price: addprice
    })
    fs.writeFileSync(path.join(__dirname,'../../db/productsDatabase.json'),
      JSON.stringify(localProductsDB, null, 4),
      {encoding: "utf-8"});
      res.status(200).redirect('/adminpanel')
    }
}


module.exports = productController;
