const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser')
const session = require('express-session');
const cookies = require('cookie-parser');
const Sequelize = require('sequelize');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes')
const methodOverride  = require('method-override');
const cookieMiddleware = require('./middleware/cookieMiddleware');
const moment = require('moment');
const multer  = require('multer');
const { cart } = require("./controllers/productsController");
app.locals.moment = moment;

app.use(session({
    secret: "It's a secret",
    resave: false, 
    saveUninitialized: false
}));
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride ("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(cookies());

app.use(cookieMiddleware);

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views"));

app.use('/', mainRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes)


app.use((req,res,next) => {
    res.status(404).render('error')
})
module.exports = app;