
let productsDB  = require('../../db/productsDatabase.json');
const fs = require('fs');
const path = require("path");


const productController = {
  product: (req, res) => {
    res.render('product', { product: productsDB.find((p) => p.id == req.params.id) });
  }, 
  deleteproduct: (req, res) => {
    let localProductsDB = JSON.parse(fs.readFileSync(path.join(__dirname,'../../db/productsDatabase.json'), {encoding:'utf8', flag:'r'})); 
    let filteredProductsDB = localProductsDB.filter(p => p.id != req.params.id);
    try {
      fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(filteredProductsDB, null, 4)); 
      console.log("Deleted Succesfully");
    } catch(err) {
      console.error(err);
    }
    console.log(filteredProductsDB);
    res.status(200).redirect('/adminpanel')
  },
  productEditView: (req, res) => {
    let categories = [...new Set(productsDB.map(p => p.category))];
    product = productsDB.find(p => p.id != req.params.id);
    res.render('productEdit', {product: product, categories: categories});
  }, 
  productEdit:(req, res) => {
    let localProductsDB = JSON.parse(fs.readFileSync(path.join(__dirname,'../../db/productsDatabase.json'), {encoding:'utf8', flag:'r'})); 
    let categories = [...new Set(productsDB.map(p => p.category))];
    const file = req.file;
    const { name, description, price, category} = req.body;
    indexProduct = productsDB.find(p => p.id == req.params.id);
    console.log(indexProduct);
    productsDB[indexProduct] = {
      id : req.params.id,
      name : name,
      description : description,
      price: price,
      category: category,
      img: `img/${file.filename}`
    }
    try {
      fs.writeFileSync(path.join(__dirname, '../../db/productsDatabase.json'), JSON.stringify(localProductsDB, null, 4)); 
      console.log("Product Changed Succesfully");
    } catch(err) {
      console.error(err);
    }
    res.status(200).redirect('/adminpanel')
  }
 
}


module.exports = productController;