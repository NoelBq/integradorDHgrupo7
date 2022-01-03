import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
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
    


  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "product",
  //     headerName: "Product",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "stock", headerName: "Stock", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "price",
  //     headerName: "Price",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/product/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="productList">
      <DataGrid
     
       
      />
    </div>
  );
}