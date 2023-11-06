import React, { useContext, useEffect, useState } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import { FaUser, FaWallet } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

import { dataContext } from "../../ContexProvider/MyContext";
import axios from "axios";

//number animation
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default function AdminDashboardStatsGrid() {
  const {
    localRoutePrefix,
    activeUsers,
    setActiveUsers,
    inactiveUsers,
    setInactiveUsers,
    walletCount,
    setWalletCount,
  } = useContext(dataContext);

  //------------------------A L L     U S E R S
  //------------------------A L L     U S E R S
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        // console.log(" all-users----->", res.data);

        let active = 0;
        let inactive = 0;
        res.data.map((user) => {
          if (user.status === "Active") {
            active += 1;
          } else {
            inactive += 1;
          }
        });
        setActiveUsers(active);
        setInactiveUsers(inactive);
      })
      .catch((error) => {
        console.error("Error fetching a user:", error);
      });
  }, []);

  //------------------------A L L     W A L L E T S
  //------------------------A L L     W A L L E T S
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/wallet/wallet`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(" all-wallets----->", res.data);
        const typeCount = {};

        for (const wallet of res.data) {
          const { type } = wallet;
          if (typeCount[type]) {
            typeCount[type] += 1;
          } else {
            typeCount[type] = 1;
          }
        }

        // Find the type with the highest count
        let mostPopularType = null;
        let highestCount = 0;

        for (const type in typeCount) {
          if (typeCount[type] > highestCount) {
            mostPopularType = type;
            highestCount = typeCount[type];
          }
        }

        setWalletCount({ type: mostPopularType, count: highestCount });
      })
      .catch((error) => {
        console.error("Error fetching a user:", error);
      });
  }, []);

  //   console.log(activeUsers, inactiveUsers);
  console.log(walletCount);
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12   bg-indigo-500  p-4 flex items-center justify-between w-full ">
          <span className="text-xl text-white font-semibold">Total Users</span>
          <FaUser className="text-2xl text-white" />
        </div>
        <div className="  h-full w-full flex relative flex-row justify-between items-center">
          <div className=" w-1/2 m-2 flex flex-col p-3 justify-center items-center ">
            <h1 className="text-xl  text-green-500">Acitve</h1>
            <span className="text-2xl">{<Number n={activeUsers} />}</span>
          </div>
          <div className=" w-1/2 m-2 flex flex-col p-3 justify-center items-center ">
            <h1 className="text-xl  text-red-500">Inactive</h1>
            <span className="text-2xl">{<Number n={inactiveUsers} />}</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12   bg-indigo-500  p-4 flex items-center justify-between w-full">
          <span className="text-xl text-white font-semibold">
            Popular Wallet
          </span>
          <FaWallet className="text-2xl text-white" />
        </div>

        <div className="pl-4 mt-2  flex flex-col justify-center items-center gap-1">
          <strong className="text-3xl  text-gray-700 font-semibold">
            {walletCount.type}
          </strong>
          <h1 className="mt-4 text-3xl">{walletCount.count}</h1>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12   bg-indigo-500  p-4 flex items-center justify-between w-full">
          <span className="text-xl text-white font-semibold">
            Total Transactions
          </span>
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              12313
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12   bg-indigo-500  p-4 flex items-center justify-between w-full">
          <span className="text-xl text-white font-semibold">
            Total Customers
          </span>
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              16432
            </strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className=" rounded-sm p-2 flex-1 border relative border-gray-200 h-44  flex flex-col items-center">
      {children}
    </div>
  );
}
