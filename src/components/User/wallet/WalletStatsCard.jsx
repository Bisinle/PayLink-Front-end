import React from "react";
import { GiWallet } from "react-icons/gi";

function WalletStatsCard() {
  return (
    <div className="stat  w-[300px] py-2 px-2   rounded-lg   flex bg-green-300 text-white relative">
      <div className="icon-title h-40  rounded-lg flex  items-center gap-10 text-black border shadow-lg bg-gradient-to-tr  from-pink-800 to-indigo-500">
        <div className=" flex flex-row">
          <span className=" text-2xl absolute  top-4 text-gray-300 font-semibold p-2 ml-4 flex justify-center items-center">
            Main
          </span>
          <button class="w-full h-56 lg:h-60 rounded-xl flex justify-center items-center focus:outline-none "></button>
          <span className=" text-4xl text-white absolute   top-4 right-4   font-semibold p-2 ml-4 flex justify-center items-center ">
            <GiWallet />
          </span>
        </div>
        <span className=" text-2xl absolute  bottom-4 left-5 text-white font-semibold p-2 ml-4 flex justify-center items-center">
          ${balance}
        </span>
      </div>
    </div>
  );
}

export default WalletStatsCard;
