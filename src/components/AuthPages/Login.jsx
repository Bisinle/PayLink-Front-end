import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // console.log(watch("username"));
  // console.log(watch("password"));

  function loginUser(data) {
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // fetch("http://127.0.0.1:5555/auth/login", requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.access_token);
    //     login(data.access_token);
    //     data.access_token && navigate("/");
    //     data.access_token ? setIsLogedin(true) : setIsLogedin(false);
    //     localStorage.setItem("refresh_token", data.refresh_token);
    //     localStorage.setItem("user_name", data.user_name);
    //     localStorage.setItem("user_role", data.user_role);
    //     localStorage.setItem("user_profile_pic", data.user_profile_pic);
    //   });
  }
  return (
    <section class="bg-gray-300  ">
      <div class="flex flex-col  w-full  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl flex justify-center">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6 " action="#">
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="user name"
                  {...register("username", {
                    required: true,
                    maxLength: 20,
                    minLength: 5,
                  })}
                />

                {errors.username && (
                  <p style={{ color: "red" }}>
                    {" "}
                    <small>username is required</small>{" "}
                  </p>
                )}
                {errors.username?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    {" "}
                    <small>should have max 25 characters</small>{" "}
                  </p>
                )}
              </div>

              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 8 })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                />
                {errors.password && (
                  <p style={{ color: "red" }}>
                    <small>password is required</small>
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    {" "}
                    <small>should have min 2 characters</small>{" "}
                  </p>
                )}
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 ">
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit(loginUser)}
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
              <p class="text-sm font-light  text-gray-500 dark:text-gray-400">
                Do not have an account?{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-indigo-800"
                >
                  Signup here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
