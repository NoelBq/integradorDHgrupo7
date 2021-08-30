const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get("/forms", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/forms.html"));
});

app.get("/shop", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/shop.html"));
  });

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/cart.html"));
  });

  
app.get("/underconstruction", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/underconstruction.html"));
});

  

const port = process.env.PORT || '3000';

app.listen(port,()=>{

console.log(`Server is runnig in the Port : ${port}`);
})
