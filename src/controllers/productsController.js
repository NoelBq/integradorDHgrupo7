
let productsDB  = require('../../db/productsDatabase.json');
const fs = require('fs');
const path = require("path");


const productController = {
    product: (req, res) => {
        res.render('product', { product: productsDB.find((p) => p.id == req.params.id) });
    },
    deleteproduct: (req, res) => {
        productsDB = productsDB.filter(p => p.id != req.params.id);
        try {
            fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(productsDB)); 
            console.log("Deleted Succesfully");
          } catch(err) {
            console.error(err);
          }
        res.redirect('/adminpanel', {product : productsDB});
    },
    productEdit: (req, res) => {
      product = productsDB.find(p => p.id != req.params.id);
      console.log(product);
      res.render('productEdit', {product: product});
  }

}

module.exports = productController;