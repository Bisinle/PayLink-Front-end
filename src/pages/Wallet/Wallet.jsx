import React, { useState, useEffect, useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import CreditCard from "./CreditCard/CreditCard";
import PayModal from "./Modal/PayModal";
import NewWalletModal from "./Modal/NewWalletModal";
import axios from "axios";

export default function Wallet() {
  const { currentUserData } = useContext(dataContext);

  if (!currentUserData || currentUserData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  console.log(currentUserData.wallet);
  //! find the wallet that has the type main so we can display it's balance
  // typeMain = currentUserData.wallet.find((wallet) => wallet.type === "Main");
  // console.log(typeMain);

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">
        Hello {currentUserData.first_name}, Welcom to your Wallet
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
                <h1 className="text-5xl">
                  $
                  {
                    currentUserData.wallet.find(
                      (wallet) => wallet.type === "Main"
                    ).balance
                  }
                </h1>
              </div>
              <div className=" flex justify-center  w-full ">
                <PayModal />
                <div className="w-1/2 ml-3 btn ">
                  <NewWalletModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
