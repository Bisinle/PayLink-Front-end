import React, { useContext, Fragment, useState } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import { dataContext } from "../../ContexProvider/MyContext";
import { AiOutlineExclamation } from "react-icons/ai";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
  HiCheck,
} from "react-icons/hi";
import classNames from "classnames";
import axios from "axios";

import { HiChevronUpDown } from "react-icons/hi2";

import { Listbox } from "@headlessui/react";

const people = [
  { name: "Savings" },
  { name: "Main" },
  { name: "Emergencies" },
  { name: "Invesment" },
];

export default function DashboardStatsGrid() {
  const [selected, setSelected] = useState(people[0]);
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
        console.log("msg--->", res.data);
      })
      .catch((error) => {
        console.error("Error fetching updating wallet:", error);
      });
  }

  const wallet_grid = currentUserData.wallet.map((wallet) => {
    return (
      <BoxWrapper>
        <Popover className="absolute  top-0 left-0 ">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <AiOutlineExclamation fontSize={24} />
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
                      className={
                        "text-gray-00 w-full font-sm border rounded-xl p-1 "
                      }
                    >
                      {wallet.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                    {/* ---------------------------------------------------------------------------------- */}
                    <div className="fixed top-16 w-72">
                      <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                              {selected.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <HiChevronUpDown
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {people.map((person, personIdx) => (
                                <Listbox.Option
                                  key={personIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={person}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {person.name}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <HiCheck
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    {/* ----------------------------------------------------------------------------- */}
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

function BoxWrapper({ children }) {
  return (
    <div className="shadow-sm  rounded-sm p-4 mb-4 flex-1 border border-gray-200  flex items-center relative">
      {children}
    </div>
  );
}

/* <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
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
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper> */
