import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";

// import Navbar from "./components/Navbar";

import Login from "../AuthPages/Login";
import Signup from "../AuthPages/Signup";
import SideBar from "../Sidebar";

// import Logout from "../AuthPages/Logout"; --visit here --------

//-----------------------U S E R ---------routes
import Dashboard from "../User/dashboard/Dashboard";
import Account from "../User/Account";
import Help from "../User/Help";
import Transactions from "../User/transactions/Transactions";
import Wallet from "../User/wallet/Wallet";

//----------C O N T E X T
import { useContext } from "react";
import { dataContext } from "../ContexProvider/MyContext";
import WalletContextProvider from "../User/wallet/WalletContextProvider";
//----------P R T E C T O R
import Protexted from "../AuthPages/Protexted";

//__________________________________________________________________________________

function RoutingComponent() {
  const { isLoggedIn, loginSignupToggle } = useContext(dataContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App flex  ">
      {/* {isLoggedIn && <SideBar />} */}
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="wallet"
          element={
            <WalletContextProvider>
              <Wallet />
            </WalletContextProvider>
          }
        />

        <Route path="transactions" element={<Transactions />} />
        <Route path="help" element={<Help />} />
        <Route path="account" element={<Account />} />
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
