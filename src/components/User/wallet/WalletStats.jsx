import React from "react";
import { FaShopify, FaCoins } from "react-icons/fa6";

function WalletStats() {
  return (
    <div className="flex flex-row gap-10 justify-center flex-wrap w-full"></div>
  );
}

export default WalletStats;

function BoxWrapper({ children }) {
  return (
    <div className="stat h-[80px] w-[300px] py-2 px-2 bg-white border shadow-lg rounded-lg   flex flex-col text-white relative">
      {children}
    </div>
  );
}
