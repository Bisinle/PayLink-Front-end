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
  const [errorMessage, setErrorMessage] = useState("");

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

    fetch("http://localhost:5555//wallet/move-movey", requestOptions)
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
        console.error(
          "There was a problem with the fetch operation:",
          error.msg
        );
        // setError(e)
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
        <div className="grid gap-6 mb-6 md:grid-cols-2       ">
          <div>
            <label
              htmlFor="countries"
              className="flex font-semibold mb-2 text-sm   text-gray-900 dark:text-white"
            >
              from_wallet
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-indigo-500 text-gray-900 smtext-lg rounded-xl focus:ring-indigo-400 focus:border-indigo-500 block w-[80%] p-3 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="wallet_type"
              {...register("from_wallet")}
            >
              <option value="Savings">Savings</option>
              <option value="Invesment">Investment</option>
              <option value="Emergencies">Emergencies</option>
              <option value="Main">Main</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="countries"
              className=" mb-2 flex justify-start  font-semibold  text-gray-900 dark:text-white"
            >
              to_wallet
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-xl focus:ring-indigo-400 focus:border-indigo-500 block w-[80%] p-3 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="wallet_type"
              {...register("to_wallet")}
            >
              <option value="Main">Main</option>
              <option value="Emergencies">Emergencies</option>
              <option value="Savings">Savings</option>
              <option value="Investment">Invesment</option>
            </select>
          </div>
        </div>

        <div
          className="flex flex-row w-full
        "
        >
          <div className=" flex flex-col justify-center items-center w-full">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        class="text-white font-bold text-xl bg-indigo-500  py-2 mt-5 rounded-lg text"
        onClick={handleSubmit(sendMoney)}
      >
        Send
      </button>
    </div>
  );
}

export default SendToYourSelf;
