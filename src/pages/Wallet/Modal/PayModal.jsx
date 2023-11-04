import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./MinotTouches.css";

//get the user id from the contetxProvider
import { useContext } from "react";
import { dataContext } from "../../../ContexProvider/MyContext";
import SendToBenef from "./SendToBenef";
import SendToYourSelf from "./SendToYourSelf";
function PayModal() {
  //destructure the context
  const { Current_UserId, setRefresh } = useContext(dataContext);
  const [isModelOpen, setIsModelOpen] = useState(false);
  // console.log(localStorage.getItem("access_token"));
  const [hideShowForm, seHideShowForm] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  function handleHideShowForm() {
    console.log("Abdiwaud");
    seHideShowForm(true);
  }

  function handleHideShowFormSenToBenef() {
    console.log("Abdiwaud");
    seHideShowForm(false);
  }

  function sendMoney(data) {
    data.sender_id = localStorage.getItem("user_id");
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
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
        setRefresh(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  const openModel = () => {
    setIsModelOpen(true);
    console.log("open");
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <div className="  btn ">
      <button
        onClick={openModel}
        type="button"
        class=" btn text-white font-bold text-xl bg-indigo-400 w-full border-gray-30  z-1 px-4 py-2 rounded-xl "
        data-toggle="modal"
        data-target="#payment-modal"
      >
        send money
      </button>

      <div
        class={`modal ${isModelOpen ? "open" : ""}  `}
        id="payment-modal"
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
              <h1>send maney to </h1>
              <div className="flex gap-4">
                <button
                  class="modal-title text-2xl font-bold text-black  mb-5 "
                  id="exampleModalCenterTitle"
                  onClick={handleHideShowFormSenToBenef}
                >
                  benef
                </button>
                <button
                  onClick={handleHideShowForm}
                  class="modal-title text-2xl font-bold text-black  mb-5 "
                  id="exampleModalCenterTitle"
                >
                  your-self
                </button>
              </div>

              {hideShowForm ? <SendToYourSelf /> : <SendToBenef />}

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
                onClick={closeModel}
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PayModal;

{
  /* <p className="text-red-500 text-xl">{errors.serverError?.message}</p> */
}
