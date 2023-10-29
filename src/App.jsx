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
import { login, useAuth } from "./components/AuthPages/auth";
function App() {
  const { isLoggedIn, loginSignupToggle } = useContext(dataContext);
  console.log(isLoggedIn);

  return (
    <div className="App  ">
      {!isLoggedIn ? ( // Check if the user is not logged in
        loginSignupToggle ? ( // Check if the user wants to sign up
          <Signup />
        ) : (
          <Login />
        )
      ) : (
        <RoutingComponent />
      )}
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
