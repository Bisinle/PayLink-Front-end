import React, { useEffect, useState } from "react";
import WalletStats from "./WalletStats";
import Pichart from "./Pichart";
import { useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import WalletActivity from "./WalletActivity";
import PayModal from "./PayModal";
// import Donut from "./Donut";

function Wallet() {
  const { Current_UserId } = useContext(dataContext);
  const [walletData, setWalletData] = useState([]);
  //__________________________________________________;
  // Fetch wallet data and set walletData in the state
  useEffect(() => {
    fetch("http://localhost:5555/wallet/wallet")
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

  return (
    <div className="  flex md:flex-col xl:flex-row flex-row justify-center   flex-1  overflow-y-auto paragraph px-4 gap-10 ">
      <div className="w-[100%] flex flex-col gap-4 ">
        <div className="   w-full  mt-1  flex flex-row items-center justify-center]">
          <WalletStats userBalance={userBalance} />
        </div>
        {/* ------------------------TAILWIND-- C A R D------------------------------ */}
        <div class="w-[100%] h-80 p-6   border border-gray-200 rounded-lg shadow bg-yellow-400 ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="">
            <PayModal />
          </div>
        </div>

        <WalletActivity />
      </div>
    </div>
  );
}

export default Wallet;
