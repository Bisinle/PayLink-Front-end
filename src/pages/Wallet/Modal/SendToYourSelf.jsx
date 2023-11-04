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

    fetch("http://127.0.0.1:5555/wallet/wallet", requestOptions)
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
    <div className="   ">
      <h5
        class="modal-title text-3xl font-bold text-black  mb-5 "
        id="exampleModalCenterTitle"
      >
        CREATE - WALLET
      </h5>
      <form class="space-y-4 md:space-y-6 w-[80%]  " action="#">
        <div className="">
          <label
            for="amount"
            class="block mb-2 text-xl font-medium text-gray-900 "
          >
            amount you wish to move
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl   focus:ring-indigo-400 focus:border-primary-600 block w-[80%] p-3   placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="amount"
            {...register("amount", {
              required: true,
              maxLength: 20,
            })}
          />

          {errors.amount && (
            <p style={{ color: "red" }}>
              {" "}
              <small>amount is required</small>{" "}
            </p>
          )}
          {errors.amount?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              <small>should have max 25 characters</small>{" "}
            </p>
          )}
        </div>

        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl   focus:ring-indigo-400 focus:border-primary-600 block w-[80%] p-3   placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="wallet_type"
            {...register("type")}
          >
            <option type="Savings">Savings</option>
            <option type="Invesment">Invesment</option>
            <option type="Emergencies">Emergencies</option>
            <option selected type="Spending">
              Main
            </option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SendToYourSelf;
