import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";

const dataContext = createContext();

function MyContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginSignupToggle, setLoginSignupToggle] = useState(false);

  /**---------------------------------------------------------   T O K E N---------------------- */
  // const access_token = localStorage.getItem("access_token");
  // console.log(access_token);

  /**---------------  F O R     U S E R ---------------------- */
  // const Current_UserName = localStorage.getItem("user_name");
  // const Current_UserRole = localStorage.getItem("user_role");
  // const Current_UserId = localStorage.getItem("user_id");
  // const Current_UserProfilePicture = localStorage.getItem("user_profile_pic");
  // const Current_UserAccount_number = localStorage.getItem("account_number");
  const localRoutePrefix = "http://127.0.0.1:5555";
  /**---------------  F O R    A P P       S T A T E S ---------------------- */
  const [Current_UserId, setCurrent_UserId] = useState(0);
  const [transactionData, setTransactionData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [waletGridBalance, setWaletGridBalance] = useState(0);
  const [allWallet, setAllWallet] = useState([]);
  const [role, setRole] = useState("");

  // for usertable activ/inac and admin user statscard
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);
  const [walletCount, setWalletCount] = useState({});
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [access_token, setAccess_token] = useState("");

  //
  //
  const [loading, setLoading] = useState(true);
  //

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (replace with actual data loading logic)
    }, 4000); // Simulated 2 seconds of loading time
  }, []);
  /*----------------------- G E T        A L L    U S E R S ---------------------------- */
  useEffect(() => {
    // Check if Current_UserId is not 0 (or any other default initial value)
    if (Current_UserId !== 0) {
      axios
        .get(`${localRoutePrefix}/user`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
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
  }, [Current_UserId]);

  if (!currentUserData) {
    // While loading, display a loading indicator
    return (
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{ display: "flex" }}
        wrapperClass="dna-wrapper"
      />
    );
  }

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    loginSignupToggle,
    setLoginSignupToggle,
    // Current_UserName,
    // Current_UserRole,
    Current_UserId,
    setCurrent_UserId,
    // Current_UserProfilePicture,
    // Current_UserAccount_number,
    access_token,
    setAccess_token,
    localRoutePrefix,
    setRefresh,
    currentUserData,
    setCurrentUserData,
    waletGridBalance,
    setWaletGridBalance,
    role,
    setRole,
    allWallet,
    setAllWallet,
    // for admin-dashboard stats
    activeUsers,
    setActiveUsers,
    inactiveUsers,
    setInactiveUsers,
    walletCount,
    setWalletCount,
    totalBalance,
    setTotalBalance,
    totalTransactions,
    setTotalTransactions,
  };
  // console.log(transactionData);
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default MyContext;
export { dataContext };
