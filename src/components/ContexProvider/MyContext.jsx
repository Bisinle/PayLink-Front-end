import React, { createContext } from "react";
import { useState } from "react";

const dataContext = createContext();

function MyContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginSignupToggle, setLoginSignupToggle] = useState(false);
  const Current_UserName = localStorage.getItem("user_name");
  const Current_UserRole = localStorage.getItem("user_role");
  const Current_UserId = localStorage.getItem("user_id");
  const Current_UserProfilePicture = localStorage.getItem("user_profile_pic");
  const Current_UserAccount_number = localStorage.getItem("account_number");

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
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default MyContext;
export { dataContext };
