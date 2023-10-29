import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";

// import Navbar from "./components/Navbar";

import Login from "../AuthPages/Login";
import Signup from "../AuthPages/Signup";
import SideBar from "../Sidebar";

// import Logout from "../AuthPages/Logout"; --visit here --------

//-----------------------U S E R ---------routes
import Dashboard from "../User/Dashboard";
import Account from "../User/Account";
import Help from "../User/Help";
import Transactions from "../User/Transactions";
import Wallet from "../User/Wallet";

function RoutingComponent() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App flex  ">
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="help" element={<Help />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="logout" element={<Logout />} /> */}
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
