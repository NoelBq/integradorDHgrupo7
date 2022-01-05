import "./chart.css";
import {
  LineChart,
  Line,
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
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
      <AreaChart
       width={600}
       height={400}
       data={orders}
       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
     >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#8884d8'
          fill='#8884d8'
        />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}