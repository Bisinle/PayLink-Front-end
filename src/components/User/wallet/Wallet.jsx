import React, { useEffect, useState } from "react";
import WalletStats from "./WalletStats";
import Pichart from "./Pichart";
import { useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import WalletActivity from "./WalletActivity";
import PayModal from "./Modal/PayModal";
import CreditCard from "./CreditCard/CreditCard";
import CreditInfo from "./CreditCard/CreditInfo";

function Wallet() {
  const { Current_UserId } = useContext(dataContext);
  const [walletData, setWalletData] = useState([]);
  //__________________________________________________;
  // Fetch wallet data and set walletData in the state
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
          S;
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

  const userBalance = walletData.find(
    (user) => user.id === parseInt(Current_UserId)
  );

  //---------------------------------------------------------------------------------------
  function creatWallet() {
    console.log("created one");
  }
  return (
    <div className="  flex md:flex-col xl:flex-row flex-row justify-center   flex-1  overflow-y-auto paragraph px-4 gap-10 ">
      <div className="w-[100%] flex flex-col gap-4 ">
        <div className="   w-full  mt-1  flex flex-row items-center justify-center]">
          <WalletStats userBalance={userBalance} />
        </div>
        {/* ------------------------TAILWIND-- C A R D------------------------------ */}
        <CreditInfo />

        <WalletActivity />
      </div>
    </div>
  );
}

export default Wallet;
