import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FeaturedInfo() {

const [orders, setOrders] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3001/api/orders')
    .then((res) => {
       setOrders(res.data)
    })
}, [])


console.log(orders)
let sales;

if(orders.length < 0) {
    sales = 0
} else {
    sales = orders.reduce(function (acc, orders) { return acc + orders.totalPrice; }, 0);
}

console.log(sales);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Ganancias</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${sales}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pedidos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> {orders.length}</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
      </div>
    </div>
  );
}