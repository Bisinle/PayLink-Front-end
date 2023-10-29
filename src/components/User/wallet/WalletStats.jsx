import React from "react";
import { FaShopify, FaCoins } from "react-icons/fa6";
import CreditCard from "./CreditCard";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";

function WalletStats() {
  return (
    <>
      {/* <h1 className="text-5xl font-bold ml-10 mt-5">welcom back user</h1> */}
      <div className="flex flex-row gap-10 justify-center flex-wrap w-full ">
        <div className="stat  w-[300px] py-2 px-2   rounded-lg   flex flex-col text-white relative">
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
            <span className=" text-2xl absolute  bottom-4 left-10 text-white font-semibold p-2 ml-4 flex justify-center items-center">
              $765456
            </span>
          </div>
        </div>

        <BoxWrapper>
          {" "}
          <div className="icon-title h-40  bg-orange-500 rounded-lg flex  items-center gap-10 text-black">
            <div className="icon h-12 w-12 flex justify-center items-center ">
              <BsFillBarChartLineFill className="  h-9 w-9  " />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">
                Total SalesS
              </span>
              <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold ">
                  $5945
                </strong>
                <span className="text-sm text-green-500 pl-2">+234</span>
              </div>
            </div>
          </div>{" "}
        </BoxWrapper>
        <BoxWrapper>
          {" "}
          <div className="icon-title h-40  bg-orange-500 rounded-lg flex  items-center gap-10 text-black">
            <div className="icon bg-indigo-500 h-12 w-12 flex justify-center items-center rounded-full">
              <FaShopify className=" rounded-full h-12 w-12 text-white " />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">Expenses</span>
              <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold ">
                  $2145
                </strong>
                <span className="text-sm text-green-500 pl-2">+4</span>
              </div>
            </div>
          </div>{" "}
        </BoxWrapper>
        <BoxWrapper>
          {" "}
          <div className="icon-title h-40  bg-orange-500 rounded-lg flex  items-center gap-10 text-black">
            <div className="icon bg-indigo-500 h-12 w-12 flex justify-center items-center rounded-full">
              <FaShopify className=" rounded-full h-12 w-12 text-white " />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">Orders</span>
              <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold ">
                  $4504
                </strong>
                <span className="text-sm text-green-500 pl-2">+571</span>
              </div>
            </div>
          </div>{" "}
        </BoxWrapper>
        <BoxWrapper>
          {" "}
          <div className="icon-title h-40  bg-orange-500 rounded-lg flex  items-center gap-10 text-black">
            <div className="icon bg-indigo-500 h-12 w-12 flex justify-center items-center rounded-full">
              <FaShopify className=" rounded-full h-12 w-12 text-white " />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">
                Purchases
              </span>
              <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold ">
                  $1003
                </strong>
                <span className="text-sm text-green-500 pl-2">+98</span>
              </div>
            </div>
          </div>{" "}
        </BoxWrapper>
      </div>
    </>
  );
}

export default WalletStats;

function BoxWrapper({ children }) {
  return (
    <div className="stat  w-[300px] py-2 px-2   rounded-lg   flex flex-col text-white relative">
      {children}
    </div>
  );
}
