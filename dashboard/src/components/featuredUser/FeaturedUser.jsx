import "./featuredUser.css";

import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FeaturedUser() {

const [users, setUsers] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3001/api/users')
    .then((res) => {
       setUsers(res.data)
    })
}, [])

console.log(users)


  return (
    <div>User</div>
    // <div className="featured">
    //   <div className="featuredItem">
    //     <span className="featuredTitle">Usuarios</span>
    //     <div className="featuredMoneyContainer">
    //     </div>
    //   </div>
    //   <div className="featuredItem">
    //     <span className="featuredTitle">Usuarios</span>
    //     <div className="featuredMoneyContainer">
  
    //     </div>
    //   </div>
    // </div>
  );
}