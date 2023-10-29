import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

<form className="space-y-4 md:space-y-6 " action="#">
  <div>
    <label
      for="firstname"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      First name
    </label>
    <input
      type="text"
      name="firstname"
      id="firstname"
      className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="first name"
      {...register("first_name")}
    />
  </div>
  <div>
    <label
      for="Lastname"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Last Name
    </label>
    <input
      type="text"
      name="Lastname"
      id="Lastname"
      className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Last name"
      {...register("last_name")}
    />
  </div>
  <div>
    <label
      for="user_name"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      username
    </label>
    <input
      type="text"
      name="user_name"
      id="user_name"
      className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="user name"
      {...register("user_name")}
    />
  </div>
  <div>
    <label
      for="email"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Your email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@company.com"
      {...register("email")}
    />
  </div>
  <div>
    <label
      for="address"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Address
    </label>
    <input
      type="text"
      name="address"
      id="address"
      className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="address"
      {...register("address")}
    />
  </div>
  <div>
    <label
      for="address"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Phone number
    </label>
    <input
      type="text"
      name="phone_number"
      id="phone_number"
      className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="phone_number"
      {...register("phone_number")}
    />
  </div>
  <div>
    <label
      for="confirm-password"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      password
    </label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="••••••••"
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...register("password")}
    />
  </div>
  <div>
    <label
      for="confirm-password"
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      Confirm password
    </label>
    <input
      type="password"
      name="password"
      id="confirm_password"
      placeholder="••••••••"
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...register("confirm_password")}
    />
  </div>
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id="terms"
        aria-describedby="terms"
        type="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        required=""
      />
    </div>
    <div className="ml-3 text-sm">
      <label for="terms" className="font-light text-gray-500 ">
        I accept the{" "}
        <a
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          href="#"
        >
          Terms and Conditions
        </a>
      </label>
    </div>
  </div>
  <button
    type="submit"
    className="w-full text-white border  border-gray-300 bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    onClick={handleSubmit(signup)}
  >
    Create an account
  </button>
  <p className="text-sm font-light  text-gray-500 dark:text-gray-400">
    Already have an account?{" "}
    <Link
      to="/login"
      className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-indigo-800"
    >
      Login here
    </Link>
  </p>
</form>;
