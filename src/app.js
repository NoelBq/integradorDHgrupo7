const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser')
const session = require('express-session');
const cookies = require('cookie-parser');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const methodOverride  = require('method-override');
const cookieMiddleware = require('./middleware/cookieMiddleware');


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

app.use((req,res,next) => {
    res.status(404).render('error')
})
module.exports = app;