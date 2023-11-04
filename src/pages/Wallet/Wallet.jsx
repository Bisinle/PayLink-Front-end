import React, { useState, useEffect, useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import CreditCard from "./CreditCard/CreditCard";
import PayModal from "./Modal/PayModal";
import axios from "axios";
import { format, getWeek, getMonth } from "date-fns";

export default function Wallet() {
  const { currentUserData, localRoutePrefix } = useContext(dataContext);

  if (!currentUserData || currentUserData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  //--------------------------------------------------------------
  //--------------------------------------------------------------
  //--------------------------------------------------------------
  // Step 1: Group transactions by week and calculate totals
  // const weeklyData = walletActivity.reduce((acc, transaction) => {
  //   const transactionDate = new Date(transaction.created_at);
  //   const weekNumber = getMonth(transactionDate); // Use getWeek from date-fns to get the week number

  //   if (!acc[weekNumber]) {
  //     acc[weekNumber] = { sent: 0, received: 0 };
  //   }

  //   if (transaction.transaction_type === "sent") {
  //     acc[weekNumber].sent += transaction.amount;
  //   } else if (transaction.transaction_type === "received") {
  //     acc[weekNumber].received += transaction.amount;
  //   }

  //   return acc;
  // }, {});

  // // Step 2: Calculate the weekly totals
  // const weeklyTotals = Object.values(weeklyData);

  // // Step 3: Prepare data for the bar chart
  // const data = {
  //   labels: Object.keys(weeklyData).map((week) => `Week ${week}`),
  //   datasets: [
  //     {
  //       label: "Sent",
  //       data: weeklyTotals.map((week) => week.sent),
  //       backgroundColor: "blue",
  //     },
  //     {
  //       label: "Received",
  //       data: weeklyTotals.map((week) => week.received),
  //       backgroundColor: "green",
  //     },
  //   ],
  // };

  // console.log(weeklyData);
  // console.log(walletActivity);
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------

  //-----------------------------------------------------------------
  //------------fund current users Wallet----------------------------
  // const currentUserWllet = currentUserData.wallet.find((user) => user.id === 6);
  // console.log(currentUserWllet);

  //-----------------------------------------------------------------
  //------------get the wallet act----------------------------

  // console.log(walletActivity);

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">
        Hello Abdiwaud, Welcom to your Wallet
      </h1>
      <div className="h-screen  w-full flex flex-col items-center    shadow-inner p-8 relative">
        <div className=" w-full mt-9 h-[50%] border rounded-xl ">
          <div className="sm:flex sm:justify-center border w-full h-full p-7 items-center">
            <CreditCard />
            <div className=" rounded-lg w-full h-[100%] flex flex-col items-center justify-center  ml-6   ">
              <h1 className="text-7xl">Balance</h1>
              <div className=" mone-and-btn sm:flex sm:flex-col sm:flex-wrap sm:justify-center sm:items-center bg-white h-[60%] relative">
                <h1 className="text-4xl">${currentUserData.wallet.balance}</h1>
              </div>
              <div className=" flex justify-center  w-full ">
                <PayModal />
                <div className="w-1/2 ml-3 btn ">
                  <button class="btn text-white font-bold text-xl  bg-indigo-400 border-gray-30  w-[50%]  border px-4 py-2 rounded-xl text">
                    currenncy converter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
