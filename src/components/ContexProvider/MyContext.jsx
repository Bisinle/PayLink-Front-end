import React, { createContext } from "react";
import { useState } from "react";

const dataContext = createContext();

function MyContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const values = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default MyContext;
export { dataContext };
