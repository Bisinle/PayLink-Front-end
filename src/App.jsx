import React from "react";

import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Login from "./components/AuthPages/Login";
import Home from "./components/Home";
import Signup from "./components/AuthPages/Signup";
import SideBar from "./components/Sidebar";
import RoutingComponent from "./components/RoutingComponent/RoutingComponent";

function App() {
  return (
    <div className="App flex ">
      <SideBar />
      <RoutingComponent />
    </div>
  );
}

export default App;

// return (
//   // <>
//   //   <Navbar />
//   //
//   //
//   // </>

// )
