import "./productList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/api/products')
      .then((res) => {
         setProducts(res)
      })
  }, [])
  

console.log(products)

  return (
   <div>
     hello
   </div>
  );
}