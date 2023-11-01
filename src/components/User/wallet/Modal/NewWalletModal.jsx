import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../MinotTouches.css";

//get the user id from the contetxProvider
import { useContext } from "react";
// import dataContext
function NewWalletModal() {
  //destructure the context
  // const { Current_UserId } = useContext(dataContext);
  const [isNewWalletModelOpen, setIsNewWalletModelOpen] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function sendMoney(data) {
    data.sender_id = localStorage.getItem("user_id");
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("REACT_TOKEN_AUTH_KEY"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://127.0.0.1:5555/transaction/transactions", requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        console.log(response); // Handle the successful response here
        // navigate("login");
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
    <div className="   top-44 left-96 btn ">
      <button
        onClick={openNewWalletModel}
        type="button"
        class=" btn text-white font-bold text-xl bg-indigo-400 border-gray-30  px-4 py-2 rounded-xl text"
        data-toggle="modal"
        data-target="#walletModal"
      >
        Create Wallet
      </button>

      <div
        class={`model modal  ${isNewWalletModelOpen ? "open" : "hidden"} `}
        data-bs-backdrop="static"
        data-keyboard="false"
        id="walletModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="  w-1/2    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg "
          role="document"
        >
          <div class="modal-content flex justify-center items-center ">
            <div class="modal-header flex flex-col justify-center items-center w-[100%]">
              <h5
                class="modal-title text-2xl font-bold text-black  mb-5 "
                id="exampleModalCenterTitle"
              >
                P A Y L I N
              </h5>
              <form class="space-y-4 md:space-y-6 w-[80%]  " action="#">
                <div className="">
                  <label
                    for="account"
                    class="block mb-2 text-xl font-medium text-gray-900 "
                  >
                    account
                  </label>
                  <input
                    type="number"
                    name="account"
                    id="account"
                    className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl   focus:ring-indigo-400 focus:border-primary-600 block w-[80%] p-3   placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="account"
                    {...register("account", {
                      required: true,
                      maxLength: 20,
                    })}
                  />

                  {errors.account && (
                    <p style={{ color: "red" }}>
                      {" "}
                      <small>account is required</small>{" "}
                    </p>
                  )}
                  {errors.account?.type === "maxLength" && (
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
                  >
                    <option selected className="bg-yellow-900 text-lg">
                      Choose a Wallet type
                    </option>
                    <option value="US">Savings</option>
                    <option value="CA">Invesment</option>
                    <option value="FR">Emergencies</option>
                    <option value="DE">Spending</option>
                  </select>
                </div>
              </form>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer ">
              <button
                type="button"
                class="text-white font-bold text-xl bg-indigo-500 px-7 py-2 rounded-lg text"
                data-dismiss="modal"
                onClick={closeNewWalletModel}
              >
                Close
              </button>
              <button
                type="button"
                class="text-white font-bold text-xl bg-indigo-500 px-7 py-2 rounded-lg text"
                onClick={handleSubmit(sendMoney)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewWalletModal;
