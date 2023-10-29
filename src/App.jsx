import React from "react";

import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Login from "./components/AuthPages/Login";
import Home from "./components/Home";
import Signup from "./components/AuthPages/Signup";
import SideBar from "./components/Sidebar";
import RoutingComponent from "./components/RoutingComponent/RoutingComponent";
import { useContext } from "react";
import { dataContext } from "./components/ContexProvider/MyContext";
function App() {
  const { contextTest, setContextTest } = useContext(dataContext);
  console.log(contextTest);
  return (
    <div className="App flex ">
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
