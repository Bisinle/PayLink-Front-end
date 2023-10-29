import React, { createContext } from "react";
import { useState } from "react";

const dataContext = createContext();

function MyContext({ children }) {
  const [contextTest, setContextTest] = useState("");
  const values = {
    contextTest,
    setContextTest,
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default MyContext;
export { dataContext };
