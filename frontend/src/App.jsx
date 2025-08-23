import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login.jsx";
// import Signup from "./components/singup/Singup.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import First from "./components/Home/First/First.jsx";
import Second from "./components/Home/Second/Second.jsx";
import Third from "./components/Home/Third/Third.jsx";
import Fourth from "./components/Home/Fourth/Fourth.jsx";
import Last from "./components/Home/Tenth/Tenth.jsx";
import Five from "./components/Home/Five/Five.jsx";
import Sixth from "./components/Home/Sixth/Sixth.jsx";
import Seven from "./components/Home/Seventh/Seven.jsx";
import Eight from "./components/Home/Eight/Eight.jsx";
import Nine from "./components/Home/Nine/Nine.jsx";
import Tenth from "./components/Home/Tenth/Tenth.jsx";
import Eleven from "./components/Home/Eleven/Eleven.jsx";
import Thirteen from "./components/Home/Thirteen/Thirteen.jsx";
// import Twelve from "./components/Home/Twelve/Twelve.jsx";
import { ToastContainer } from "react-toastify";

import UserTable from "./components/Home/userTable/UserTable.jsx";
import Userview from "./components/userview/Userview.jsx";
import UserDelete from "./components/userDelete/UserDelete.jsx";
import Addproduct from "./components/Product/Addprodut/Addproduct.jsx";

import AllProducts from "./components/Product/allProduct/AllProduct.jsx";
import Singup from "./components/Home/Signup/Signup.jsx";



const App = () => {
  return (
    <div style={{ overflowX: "hidden" }} className="app">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          {/* Define routes for each component */}
          <Route
            path="/"
            element={
              <>
                <First></First>
                <Second></Second>
                <Third></Third>
                <Fourth></Fourth>
                <Five></Five>
                <Sixth></Sixth>
                <Seven></Seven>
                <Eight></Eight>
                <Nine></Nine>
                <Tenth></Tenth>
                <Eleven></Eleven>
                <Thirteen></Thirteen>
              </>
            }
          />
          <Route path="/login" element={<Login />} /> <Route path="/sign" element={<Singup/>} />

          <Route path="/usertable" element={<UserTable />} />
          <Route path="/userview/:id" element={<Userview />} />
          <Route path="/userdelete/:id" element={<UserDelete />} />
          <Route path="/addProduct" element={<Addproduct />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          {/* <First></First>
            <Second></Second>
            <Third></Third>
            <Fourth></Fourth>
            <Five></Five>
            <Sixth></Sixth>
            <Seven></Seven>
            <Eight></Eight>
            <Nine></Nine>
            <Tenth></Tenth>
            <Eleven></Eleven>
            <Thirteen></Thirteen> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
