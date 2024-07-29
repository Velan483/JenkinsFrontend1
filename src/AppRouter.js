import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import View from "./View";
import Add from "./Add";
import Edit from "./Edit"
import "./App.css";
import Find from "./Find";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";


function AppRouter() {
  return (
    
    <Router class="header">
      <header>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>

            <li>
              <Link to="/view">View Product</Link>
            </li>
            <li style={{marginLeft:"200px"}}>
                <Link to="/find"><button class="btn btn-outline-light"  type="submit"><i class='bx bx-search'></i> Product</button></Link>
            </li>
          </ul>
        </nav>
        </header><br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Edit/>} />
        <Route path="/find" element={<Find/>} />
        <Route path="/view" element={<View />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
