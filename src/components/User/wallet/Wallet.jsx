import React from "react";
import WalletStats from "./WalletStats";

function Wallet() {
  return (
    <div className="bg-gray-200 w-full  flex-col gap-4">
      <h1 className="text-4xl font-bold m-10">
        Hello User, Welcom to you wallet
      </h1>
      <WalletStats />
    </div>
  );
}

export default Wallet;
