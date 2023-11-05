import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet/Wallet";
import Transactions from "./pages/Transactions";
import Login from "./AuthPages/Login";
import NotFound from "./AuthPages/NotFound";
import { dataContext } from "./ContexProvider/MyContext";
import Protector from "./AuthPages/Protector/Protector";
import SendToBenef from "./pages/Wallet/Modal/SendToBenef";
import SendToYourSelf from "./pages/Wallet/Modal/SendToYourSelf";

function App() {
  const { isLoggedIn, loginSignupToggle } = useContext(dataContext);
  return (
    <div className="App  ">
      {!isLoggedIn ? ( // Check if the user is not logged in
        loginSignupToggle ? ( // Check if the user wants to sign up
          <Register />
        ) : (
          <Login />
        )
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />}>
              <Route path="wallet/benef" element={<SendToBenef />} />
              <Route path="wallet/yourWallet" element={<SendToYourSelf />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
