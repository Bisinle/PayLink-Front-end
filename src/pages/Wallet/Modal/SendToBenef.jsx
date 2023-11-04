import React from "react";
import { useForm } from "react-hook-form";

function SendToBenef() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  return (
    <div>
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
            className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl   focus:ring-indigo-400 focus:border-primary-600 block w-full p-3   placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="block mb-2 text-xl font-medium text-gray-900 "
          >
            amount
          </label>
          <input
            type="number"
            {...register("amount", { required: true, minLength: 2 })}
            className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl   focus:ring-indigo-400 focus:border-primary-600 block w-full p-3   placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="block mb-2 text-xl font-medium text-gray-900 "
          >
            what are you paying for
          </label>
          <input
            type="text"
            {...register("category", { required: true, minLength: 2 })}
            className="bg-gray-50 border border-indigo-500 text-gray-900 sm:text-lg rounded-2xl   focus:ring-indigo-400 focus:border-primary-600 block w-full p-3   placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    </div>
  );
}

export default SendToBenef;
