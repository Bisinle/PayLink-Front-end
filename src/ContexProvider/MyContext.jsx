import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

function MyContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginSignupToggle, setLoginSignupToggle] = useState(false);

  /**---------------------------------------------------------   T O K E N---------------------- */
  const access_token = localStorage.getItem("access_token");
  // console.log(access_token);

  /**---------------  F O R     U S E R ---------------------- */
  const Current_UserName = localStorage.getItem("user_name");
  const Current_UserRole = localStorage.getItem("user_role");
  const Current_UserId = localStorage.getItem("user_id");
  const Current_UserProfilePicture = localStorage.getItem("user_profile_pic");
  const Current_UserAccount_number = localStorage.getItem("account_number");
  const localRoutePrefix = "http://127.0.0.1:5555";
  /**---------------  F O R    A P P       S T A T E S ---------------------- */
  const [transactionData, setTransactionData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [waletGridBalance, setWaletGridBalance] = useState(0);
  const [role, setRole] = useState("");

  //
  //
  //

  /*----------------------- G E T        A L L    U S E R S ---------------------------- */
  useEffect(() => {
    if (Current_UserId) {
      axios
        .get(`${localRoutePrefix}/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          console.log(" user----->", res.data);
          setCurrentUserData(res.data);
        })
        .catch((error) => {
          console.error("Error fetching a user:", error);
        });
    }
  }, [refresh, Current_UserId]);

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
    access_token,
    localRoutePrefix,
    setRefresh,
    currentUserData,
    setCurrentUserData,
    waletGridBalance,
    setWaletGridBalance,
    role,
    setRole,
  };
  // console.log(transactionData);
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default MyContext;
export { dataContext };
