import React, { useState, useEffect, useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import CreditCard from "./CreditCard/CreditCard";
import PayModal from "./Modal/PayModal";
import CreateWallet from "./Modal/CreateWallet";
import axios from "axios";


export default function Wallet() {
  const { currentUserData } = useContext(dataContext);
  const [fixer, setFixer] = useState([]);

  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    if (currentUserData.wallet && currentUserData.wallet.length > 0) {
      const mainWallet = currentUserData.wallet.find(
        (wallet) => wallet.type === "Main"
      );
      if (mainWallet) {
        setUserBalance(mainWallet.balance);
      }
    }
  }, [currentUserData]);

  console.log(currentUserData.wallet);
  console.log(fixer);

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">
        Hello{" "}
        <span className="text-indigo-500">{currentUserData.first_name}</span>,
        Welcom to your Wallet
      </h1>
      <div className="h-screen  w-full flex flex-col items-center     shadow-inner p-8 relative">
        <div className=" w-full mt-9 h-[50%] border b rounded-xl ">
          <div className="sm:flex sm:justify-center border bg-gradient-to-tr from-indigo-500 to-pink-400 rounded-3xl w-full h-full p-7 items-center relative">
            <div class="main-circle  absolute top-20 right-[200px]  bg-transparent w-9 h-[506px]">
              <div class="circle circle-3 w-10 h-10 top-0 opacity-40 "></div>
              <div class="circle circle-4 opacity-40"></div>
            </div>
            <CreditCard />
            <div className=" rounded-lg w-full h-[100%] flex flex-col items-center justify-center  ml-6   ">
              <h1 className="text-7xl">Balance</h1>
              <div class="circle circle-3 w-10 h-10 top-0 opacity-40 "></div>

              <div className=" mone-and-btn sm:flex sm:flex-col sm:flex-wrap sm:justify-center sm:items-center   text-gray-300  font-bold h-[60%] w-[30%] relative">
                <h1 className="text-5xl">${userBalance}</h1>
              </div>
              <div className=" flex justify-center  w-full ">
                <PayModal />
                <div className="w-1/2 ml-3 btn ">
                  <CreateWallet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
