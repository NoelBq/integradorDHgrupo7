import "./featuredproducts.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FeaturedProducts(props) {

 
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Cantidad de Productos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{props.products.length}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowUpward  className="featuredIcon positive"/>
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Mas Vendido</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> </span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
      </div>
    </div>
  );
}