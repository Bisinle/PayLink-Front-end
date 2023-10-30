import React, { useEffect, useState } from "react";
import WalletStats from "./WalletStats";
import Pichart from "./Pichart";
import { useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import WalletActivity from "./WalletActivity";

function Wallet() {
  const { Current_UserName, Current_UserId } = useContext(dataContext);
  const [walletData, setWalletData] = useState([]);

  //__________________________________________________________________________________
  // Fetch wallet data and set walletData in the state
  useEffect(() => {
    fetch("http://localhost:5555/wallet/wallet")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setWalletData(response);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  if (!walletData || walletData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  const userBalance = walletData.find(
    (user) => user.id === parseInt(Current_UserId)
  );
  console.log(userBalance.balance);
  // const [userBalance, setUserBalance] = useState([]);

  //__________________________________________________________________________________
  return (
    <div className=" flex flex-row justify-between bg-gray-400 flex flex-1  overflow-y-auto paragraph px-4">
      <div className="w-[100%] flex flex-col gap-4 ">
        <div className="   w-full  mt-1  flex flex-row items-center justify-center]">
          <WalletStats userBalance={userBalance} />
          <h1 className="text-4xl  font-bold whitespace-nowrap">
            Welcome Back {Current_UserName}
          </h1>
        </div>
        <div className=" h-96 w-96 bg-black">
          <h1>asldkfjsldfkaj</h1>
        </div>
        <div className="flex justify-center items-center bg-gray-400 h-[300px]  w-[70%] overflow-hidden">
          <WalletActivity />
        </div>
      </div>
      <div className="left-side h-screen bg-orange-600 w-full">
        {" "}
        <h1>hello</h1>
        <Pichart />
      </div>
    </div>
  );
}

export default Wallet;
