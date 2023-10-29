import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";

// import Navbar from "./components/Navbar";

import Login from "../AuthPages/Login";
import Signup from "../AuthPages/Signup";
import Home from "../Home";

function RoutingComponent() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="App flex-col justify-center items-center w-full "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
