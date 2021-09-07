const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require('./routes/mainRoutes');
const port = process.env.PORT || '3000';
app.use(express.static(path.join(__dirname, "./public")));
app.set('view engine', 'ejs');

app.use('/', mainRoutes);

app.listen(port,()=>{

console.log(`Server is runnig in the Port : ${port}`);
})
