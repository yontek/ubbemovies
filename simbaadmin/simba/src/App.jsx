import React, { useContext, useEffect, useMemo, useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
  <Routes>
    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}> </Route>

    {user && (
      
        <Route path="*" element={
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              
              <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/users" element={<UserList />} />
                <Route path="newUser" element={<NewUser />} />
                <Route path="/movies"  element={<ProductList />} />
                <Route path="/products/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
              
              </Routes>
              
            </div>
          </>
        } />
      
    )}
  </Routes>
</Router>
  )

}

export default App;

