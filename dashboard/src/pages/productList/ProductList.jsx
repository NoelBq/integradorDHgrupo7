import "./productList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import ProductTable from "../../components/productTable/ProductTable";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/api/products')
      .then((res) => {
        const products = [...res.data]
        setProducts(products)
      })
  }, [])

  let random = products[Math.floor(Math.random()*products.length)];
  

  return (
    <div className="home">
   <div className="homeWidgets">
     <FeaturedProducts products={products} product={random} />
    <ProductTable products={products}  />
   </div>
   </div>
  );
}