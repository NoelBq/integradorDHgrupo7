const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const methodOverride  = require('method-override');
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride ("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views"));
app.use('/', mainRoutes);
app.use('/product', productRoutes);

app.use((req,res,next) => {
    res.status(404).render('error')
})
module.exports = app;