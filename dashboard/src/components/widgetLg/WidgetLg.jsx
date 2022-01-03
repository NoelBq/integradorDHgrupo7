
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./widgetLg.css"

export default function WidgetLg() {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/api/orders')
      .then((res) => {
         setOrders(res.data)
      })
  }, [])
  

  return (
    <div className="widgetLg">
      <div class="table" id="results">
  <div class='theader'>
    <div class='table_header'>Cliente</div>
    <div class='table_header'>Fecha</div>
    <div class='table_header'>Monto</div>
    <div class='table_header'>Estado</div>
  </div>
  <div class='table_row'>
    <div class='table_small'>
      <div class='table_cell'>Header One</div>
      <div class='table_cell'>-1.2726</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Two</div>
      <div class='table_cell'>0.1311</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Three</div>
      <div class='table_cell'>-0.4782</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Four</div>
      <div class='table_cell'>-0.9919</div>
    </div>
  </div>
  <div class='table_row'>
    <div class='table_small'>
      <div class='table_cell'>Header One</div>
      <div class='table_cell'>-0.89</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Two</div>
      <div class='table_cell'>0.7986</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Three</div>
      <div class='table_cell'>0.876</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Four</div>
      <div class='table_cell'>0.498</div>
    </div>
  </div>
  <div class='table_row'>
    <div class='table_small'>
      <div class='table_cell'>Header One</div>
      <div class='table_cell'>-1.1669</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Two</div>
      <div class='table_cell'>0.4949</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Three</div>
      <div class='table_cell'>-0.7113</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Four</div>
      <div class='table_cell'>0.434</div>
    </div>
  </div>
  <div class='table_row'>
    <div class='table_small'>
      <div class='table_cell'>Header One</div>
      <div class='table_cell'>0.1996</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Two</div>
      <div class='table_cell'>-0.7693</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Three</div>
      <div class='table_cell'>1.974</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Four</div>
      <div class='table_cell'>-0.959</div>
    </div>
  </div>
  <div class='table_row'>
    <div class='table_small'>
      <div class='table_cell'>Header One</div>
      <div class='table_cell'>-1.5998</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Two</div>
      <div class='table_cell'>-0.1149</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Three</div>
      <div class='table_cell'>1.3888</div>
    </div>
    <div class='table_small'>
      <div class='table_cell'>Header Four</div>
      <div class='table_cell'>-0.0689</div>
    </div>
  </div>
</div>
    </div>
  );
}