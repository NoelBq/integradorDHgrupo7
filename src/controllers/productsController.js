
let productsDB  = require('../../db/productsDatabase.json');
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');


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
  },
  insert: (req,res) =>{
    let {productname,description,category,addprice} = req.body;
    productsDB.push({
      id: uuid(),
      name: productname,
      description: description,
      category: category,
      addimage: req.file.filename,
      price: addprice
    })
    fs.writeFileSync(path.join(__dirname,'../../db/productsDatabase.json'),
      JSON.stringify(productsDB, null, 4),
      {encoding: "utf-8"});
      res.redirect('/adminpanel')
  }

}

module.exports = productController;