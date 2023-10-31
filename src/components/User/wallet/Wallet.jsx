import React, { useEffect, useState } from "react";
import WalletStats from "./WalletStats";
import Pichart from "./Pichart";
import { useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import WalletActivity from "./WalletActivity";
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
    <div className="  flex-row justify-between flex flex-1  overflow-y-auto paragraph px-4 gap-10">
      <div className="w-[100%] flex flex-col gap-4 ">
        <div className="   w-full  mt-1  flex flex-row items-center justify-center]">
          <WalletStats userBalance={userBalance} />
        </div>
        {/* ------------------------TAILWIND-- C A R D------------------------------ */}
        <div class="w-[100%] h-80 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        <WalletActivity />
      </div>
      <div className="left-side h-screen   w-[100%">
        {" "}
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default Wallet;
