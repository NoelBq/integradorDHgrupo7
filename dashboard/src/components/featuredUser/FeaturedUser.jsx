import "./featuredUser.css";

import React, { useState, useEffect } from 'react';
import { ArrowDownward, ArrowUpward,  EmojiPeople , PeopleAlt} from "@material-ui/icons";
import axios from 'axios';


export default function FeaturedUser(props) {

  return (
  <>
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">< PeopleAlt/> Usuarios Registrados</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">
          {props.users.length} Usuarios</span>
        <span className="featuredMoneyRate"> Aumento
            2 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
      </div>
    </div>
    </>
  );
}