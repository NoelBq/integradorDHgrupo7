
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Chart from '../../components/chart/Chart'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderTable from "../../components/orderTable/OrderTable";


export default function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/api/orders')
      .then((res) => {
        const orders = [...res.data]
         setOrders(orders)
      })
  }, [])
  return (

    
    <div className="home">
    
      <div className="homeWidgets">
        <FeaturedInfo />
        <OrderTable orders={orders}/>

      </div>
    </div>
  );
}