import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Lottie from "lottie-web";
import signupBanner from "../../assets/signupBanner.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const container = useRef();
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init();
    const anim = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: signupBanner,
    });

    anim.addEventListener("DOMLoaded", () => {
      setAnimationLoaded(true);
    });

    return () => {
      // Clean up the animation when the component is no longer in the view
      anim.destroy();
    };
  }, []);
  // console.log(watch("username"));
  // console.log(watch("password"));
  function signup(data) {
    // console.log(data);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://127.0.0.1:5555/auth/signup", requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        console.log(response); // Handle the successful response here
        // navigate("/login");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  return (
    <section
      className="flex sm:h-screen"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="flex  w-[100%] mr-10 items-center justify-center sm:flex sm:flex-col md:flex-col lg:flex-row px-6 py-8  ">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className={`sm:h-screen border-b-0  ${
            animationLoaded ? "" : "hidden"
          }         
        

        `}
          ref={container}
        ></div>

        <div className="w-[40%] bg-white   rounded-lg shadow-slate-400 md:mt-0  sm:w-[80%] md:w-[80%] xl:w-[50%] dark:border-gray-800 md:p-3 p-3 shadow-lg">
          <div className="w-full ">
            <h1 className="flex justify-center mb-10 text-3xl font-bold">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6  w-full" action="#">
              <div className=" grid grid-cols-2 gap-4">
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-indigo-400 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-400 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              </div>

              <button
                type="submit"
                className=" text-white border shadow  flex justify-center items-center mx-auto border-gray-300 bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleSubmit(signup)}
              >
                Create an account
              </button>
              <p className="text-sm font-light   text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium  text-primary-600 hover:underline dark:text-primary-500 text-indigo-800"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
