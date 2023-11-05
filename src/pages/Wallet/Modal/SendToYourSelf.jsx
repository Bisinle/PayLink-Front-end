import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./MinotTouches.css";

//get the user id from the contetxProvider
import { useContext } from "react";
// import dataContext
function SendToYourSelf() {
  //destructure the context
  // const { Current_UserId } = useContext(dataContext);
  const [isNewWalletModelOpen, setIsNewWalletModelOpen] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  function sendMoney(data) {
    data.user_id = localStorage.getItem("user_id");
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("REACT_TOKEN_AUTH_KEY"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://127.0.0.1:5555/wallet/move-movey", requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        console.log(response); // Handle the successful response here
        // navigate("login");type
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  const openNewWalletModel = () => {
    setIsNewWalletModelOpen(true);
  };

  const closeNewWalletModel = () => {
    setIsNewWalletModelOpen(false);
  };
  return (
    <div className="w-full h-96 flex  flex-col justify-center ">
      <form
        className="space-y-4 md:space-y-6 w-[100%] flex flex-col justify-center items-center"
        action="#"
      >
        <div
          className="flex flex-row w-full bg-yellow-400
        "
        >
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              from_wallet
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl focus:ring-indigo-400 focus:border-indigo-500 block w-[80%] p-3 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="wallet_type"
              {...register("from_wallet")}
            >
              <option value="Savings">Savings</option>
              <option value="Investment">Investment</option>
              <option value="Emergencies">Emergencies</option>
              <option value="Spending">Main</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              to_wallet
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl focus:ring-indigo-400 focus:border-indigo-500 block w-[80%] p-3 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="wallet_type"
              {...register("to_wallet")}
            >
              <option value="Savings">Savings</option>
              <option value="Investment">Investment</option>
              <option value="Emergencies">Emergencies</option>
              <option value="Spending">Main</option>
            </select>
          </div>
        </div>

        <div
          className="flex flex-row w-full bg-yellow-400
        "
        >
          <div className="">
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter amount you wish to move
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl focus:ring-indigo-400 focus:border-indigo-500 block w-[80%] p-3 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount"
              {...register("amount", {
                required: true,
                maxLength: 20,
              })}
            />

            {errors.amount && (
              <p style={{ color: "red" }}>
                <small>Amount is required</small>
              </p>
            )}
            {errors.amount?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Should have a maximum of 20 characters</small>
              </p>
            )}
          </div>
        </div>
      </form>
      <button
        type="button"
        class="text-white font-bold text-xl bg-indigo-500 px-7 py-2 rounded-lg text"
        onClick={handleSubmit(sendMoney)}
      >
        Send
      </button>
    </div>
  );
}

export default SendToYourSelf;
