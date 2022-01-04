import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import ProductList from "./pages/productList/ProductList"
import Users from "./pages/users/Users"
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <Topbar />
    <div className="container"> 
    <Sidebar />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </div>
    
    </Router>,
    </>
    );
  }
  
  export default App;