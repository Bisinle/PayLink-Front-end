import React, { createContext, useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContexProvider/MyContext";

const walletContext = createContext();

function WalletContextProvider({ children }) {
  const { Current_UserId } = useContext(dataContext);
  const [walletActivityData, setWalletActivityData] = useState([]);
  const [currentUserWalletActivity, setCurrentUserWalletActivity] = useState(
    []
  );

  useEffect(() => {
    fetch("http://localhost:5555/wallet/wallet-Activity")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        // console.log(response);
        setWalletActivityData(response);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const values = {
    walletActivityData,
  };
  return (
    <walletContext.Provider value={values}>{children}</walletContext.Provider>
  );
}

export default WalletContextProvider;
export { walletContext };
