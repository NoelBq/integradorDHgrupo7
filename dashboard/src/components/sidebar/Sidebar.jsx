import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  CategoryIcon,
  Assistant,
  Class 
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';




export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
   
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Ordenes
            </li>
            </Link>
            <Link to="/categories" className="link">
            <li className="sidebarListItem">
              <Class className="sidebarIcon" />
              Categorias
            </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
          </Link>
          <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}