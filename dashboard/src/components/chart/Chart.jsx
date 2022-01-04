import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Chart({ title, data, dataKey, grid }) {

  const [orders, setOrders] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3001/api/orders')
    .then((res) => {
       setOrders(res.data)
    })
}, [])


  return (
    <div className="chart">
      <h3 className="chartTitle">Analitics</h3>
      <ResponsiveContainer width="80%" aspect={4 / 1}>
        <LineChart data={orders}>
          <XAxis dataKey={orders.createdAt} stroke="#5550bd" />
          <Line type="monotone" dataKey={orders.totalPrice} stroke="#5550bd" />

          <Tooltip />
           <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}