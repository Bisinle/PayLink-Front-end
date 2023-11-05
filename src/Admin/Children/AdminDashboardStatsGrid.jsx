import React, { useContext, useEffect, useState } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import { dataContext } from "../../ContexProvider/MyContext";
import axios from "axios";

export default function AdminDashboardStatsGrid() {
  const { localRoutePrefix } = useContext(dataContext);
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  //------------------------A L L     U S E R S
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(" all-users----->", res.data);

        let active = 0;
        let inactive = 0;
        res.data.map((user) => {
          if (user.status === "Acitve") {
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

  console.log(activeUsers, inactiveUsers);
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12   bg-indigo-500  p-4 flex items-center justify-between w-full ">
          <span className="text-2xl text-white a font-light">Total Users</span>
          <FaUser className="text-2xl text-white" />
        </div>
        <div className="  h-full w-full flex relative flex-row justify-between items-center">
              <div className=" w-1/2 m-2 flex flex-col p-3 ">
                <h1 className="text-2xl text-green-500">Acitve</h1>
				<span className="text-3xl">{activeUsers}</span>
              </div>
              <div className=" w-1/2 m-2 flex flex-col p-3 ">
                <h1 className="text-2xl text-red-500">Inactive</h1>
				<span className="text-3xl">{inactiveUsers}</span>
              </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>


        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Expenses
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3423
            </strong>
            <span className="text-sm text-green-500 pl-2">-343</span>
          </div>
        </div>


      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Customers
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              12313
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
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
