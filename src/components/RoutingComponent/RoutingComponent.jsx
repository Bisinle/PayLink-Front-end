import React from "react";

import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

import Login from "../AuthPages/Login";
import Signup from "../AuthPages/Signup";
import Home from "../Home";

function RoutingComponent() {
  return (
    <div className="App flex-col justify-center items-center w-full ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default RoutingComponent;

// return (
//   // <>
//   //   <Navbar />
//   //
//   //
//   // </>

// )
