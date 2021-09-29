
let productsDB = require('../../db/productsDatabase.json');
const fs = require('fs');
const path = require("path");
const utils = require('../utils/utils');

const productController = {

  product: (req, res) => {
    res.render('product', { product: productsDB.find((p) => p.id == req.params.id) });
  },
  deleteproduct: (req, res) => {
    let localProductsDB = utils.parseJS(productsDB);
    let filteredProductsDB = localProductsDB.filter(p => p.id != req.params.id);
    let productToDelete = localProductsDB.find(p => p.id == req.params.id);
    try {
      fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(filteredProductsDB, null, 4));
      fs.unlinkSync(path.join(__dirname, `../public/${productToDelete.img}`));
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
      product['img'] = `/images/${file.filename}`
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
  }
}


module.exports = productController;
