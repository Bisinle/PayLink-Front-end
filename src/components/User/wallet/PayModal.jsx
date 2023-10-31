import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//get the user id from the contetxProvider
import { useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
function PayModal() {
  //destructure the context
  const { Current_UserId } = useContext(dataContext);
  console.log(localStorage.getItem("REACT_TOKEN_AUTH_KEY"));
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function sendMoney(data) {
    console.log(data);
    // data.user_id = "24";
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("REACT_TOKEN_AUTH_KEY")}`,
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
  return (
    <div className="bg-green-500 w-[50%] h-[100%]">
      <button
        type="button"
        class=" btn text-white font-bold text-xl bg-indigo-500 px-7 py-2 rounded-xl text"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade 	"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog bg-yellow-300 modal-dialog-centered  "
          role="document"
        >
          <div class="modal-content bg-orange-900 flex justify-center items-center">
            <div class="modal-header flex flex-col justify-center items-center bg-cyan-600 w-[100%]">
              <h5
                class="modal-title text-2xl font-bold text-white  "
                id="exampleModalCenterTitle"
              >
                M O D E L
              </h5>
              <form class="space-y-4 md:space-y-6 w-[80%]  " action="#">
                <div className="bg-blue-500">
                  <label
                    for="account"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    account
                  </label>
                  <input
                    type="text"
                    name="account"
                    id="account"
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    for="confirm-amount"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    amount
                  </label>
                  <input
                    type="amount"
                    {...register("amount", { required: true, minLength: 2 })}
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="amount"
                  />
                  {errors.amount && (
                    <p style={{ color: "red" }}>
                      <small>amount is required</small>
                    </p>
                  )}
                  {errors.amount?.type === "minLength" && (
                    <p style={{ color: "red" }}>
                      {" "}
                      <small>should have min 2 characters</small>{" "}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    what are you paying for
                  </label>
                  <input
                    type="category"
                    {...register("category", { required: true, minLength: 2 })}
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="category"
                  />
                  {errors.category && (
                    <p style={{ color: "red" }}>
                      <small>category is required</small>
                    </p>
                  )}
                  {errors.category?.type === "minLength" && (
                    <p style={{ color: "red" }}>
                      {" "}
                      <small>should have min 2 characters</small>{" "}
                    </p>
                  )}
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
            <div class="modal-footer">
              <button
                type="button"
                class="text-white font-bold text-xl bg-indigo-500 px-7 py-2 rounded-lg text"
                data-dismiss="modal"
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

export default PayModal;
