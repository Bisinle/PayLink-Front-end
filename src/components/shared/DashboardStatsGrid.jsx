import React, { useContext, Fragment, useState } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import { dataContext } from "../../ContexProvider/MyContext";
import { AiOutlineExclamation } from "react-icons/ai";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
} from "react-icons/hi";
import classNames from "classnames";
import axios from "axios";

export default function DashboardStatsGrid() {
  const { currentUserData, localRoutePrefix, access_token } =
    useContext(dataContext);

  if (!currentUserData || currentUserData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  //!--------------- update wallet status function---------------------
  function deactivateWallet(id) {
    console.log(id);

    axios
      .put(`${localRoutePrefix}/wallet/wallet/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        // setCurrentUserCartItems(res.data);
        console.log("msg--->", res.data.status);
      })
      .catch((error) => {
        console.error("Error fetching updating wallet:", error);
      });
  }

  const wallet_grid = currentUserData.wallet.map((wallet) => {
    return (
      <BoxWrapper status={wallet.status}>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center absolute right-4 top-5 rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none  active:bg-gray-100"
                )}
              >
                <AiOutlineExclamation className=" " fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-0  top-16 z-10  transform w-80">
                  <div className="bg-white  rounded-xl shadow-md ring-1 w-44 ring-black flex items-center justify-center ring-opacity-1  ">
                    <button
                      onClick={() => deactivateWallet(wallet.id)}
                      className={` text-white  w-full font-lg font-semibold border ${
                        wallet.status !== "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } rounded-xl p-1 border-orange-500`}
                    >
                      {wallet.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <div
          className="rounded-full h-12 w-12 bg-indigo-200
		 flex items-center justify-center bg-sky-500"
        >
          <IoBagHandle className="text-2xl " />
        </div>{" "}
        <div className=" flex flex-col gap-4 w-full justify-center items-center">
          <span className="text-lg text-gray-800  font-light">
            {wallet.type}
          </span>
          <div className="pl-4 w-full h-[100%]">
            <div className="flex justify-between items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                ${wallet.balance}
              </strong>
              <span
                className={`text-sm ${
                  wallet.status === "Active" ? "text-green-500" : "text-red-500"
                }  pl-2`}
              >
                {wallet.status}
              </span>
            </div>
          </div>
        </div>
      </BoxWrapper>
    );
  });

  return <div className="flex gap-4">{wallet_grid}</div>;
}

function BoxWrapper({ children, status }) {
  return (
    <div
      className={`shadow-sm  rounded-sm p-4 mb-4 flex-1 border border-gray-200 ${
      status !== "Active" ? "bg-gray-400" : "bg-white"
      }   flex items-center relative`}
    >
      {children}
    </div>
  );
}
