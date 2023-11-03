import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

function MyContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**---------------  F O R     U S E R ---------------------- */
  const [loginSignupToggle, setLoginSignupToggle] = useState(false);
  const Current_UserName = localStorage.getItem("user_name");
  const Current_UserRole = localStorage.getItem("user_role");
  const Current_UserId = localStorage.getItem("user_id");
  const Current_UserProfilePicture = localStorage.getItem("user_profile_pic");
  const Current_UserAccount_number = localStorage.getItem("account_number");
  const localRoutePrefix = "http://localhost:5555";
  /**---------------  F O R    A P P       S T A T E S ---------------------- */
  const [transactionData, setTransactionData] = useState([]);
  const [allUsersData, setAllUsersData] = useState([]);
  const [walletData, setWalletData] = useState([]);
  const [walletActivity, setWalletActivity] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);

  //
  //
  //

  /*----------------------- G E T        A L L    U S E R S ---------------------------- */
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        // console.log(" All USERS-->", res.data);
        setAllUsersData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [Current_UserId]);

  //****************** */
  /*----------------------- G E T        T R A N S A C T I O N S---------------------------- */
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/transaction/transactions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        // console.log(" T R A N S A C T I O N S", res.data);
        setTransactionData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  //****************** */

  /*----------------------- G E T        W A L L E T    D A T A---------------------------- */
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:5555/wallet/wallet", requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        // console.log(response);
        setWalletData(response);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  //****************** */

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/wallet/wallet-Activity`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        // console.log(" Activty", res.data);
        const activity = res.data.filter((act) => {
          return act.user_id === 4;
        });
        // console.log(activity);
        setWalletActivity(activity);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  //****************** */

  /*----------------------- G E T        W A L L E T    D A T A---------------------------- */

  //****************** */

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    loginSignupToggle,
    setLoginSignupToggle,
    Current_UserName,
    Current_UserRole,
    Current_UserId,
    Current_UserProfilePicture,
    Current_UserAccount_number,
    transactionData,
    walletData,
    localRoutePrefix,
    walletActivity,
    
  };
  // console.log(transactionData);
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default MyContext;
export { dataContext };
