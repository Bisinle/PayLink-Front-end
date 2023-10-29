import React from "react";
import WalletStats from "./WalletStats";
import Pichart from "./Pichart";

function Wallet() {
  return (
    <div className=" w-full  flex-col gap-4 justify-center items-center">
      <WalletStats />
      <Pichart />
    </div>
  );
}

export default Wallet;
