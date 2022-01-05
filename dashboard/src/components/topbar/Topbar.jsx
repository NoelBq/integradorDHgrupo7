import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./topbar.css";
import { KeyboardReturn} from "@material-ui/icons";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <a href="http://localhost:3001/" className="href">< KeyboardReturn/></a>
            
          </div>
           {/* <img src={list.image} alt="profileImage" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}