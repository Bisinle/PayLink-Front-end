import { useState } from "react";
import { BsArrowLeftShort, BsImageFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { IoWallet, IoSettingsSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { ImNotification } from "react-icons/im";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "./AuthPages/auth";

import { useContext } from "react";
import { dataContext } from "./ContexProvider/MyContext";
export default function SideBar() {
  const { setIsLoggedIn } = useContext(dataContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  //logout function
  const handleLogout = () => {
    // setUserRole(null);
    localStorage.clear();
    logout();
    navigate("login");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex mr-[1%]  h-screen min-h-screen ">
      <div
        className={`bg-light-purple  bg-indigo-500  p-5 pt-8 ${
          open ? "w-60" : "w-16"
        } duration-300 relative h-screen`}
      >
        <BsArrowLeftShort
          className={`bg-white text-light-purple text-3xl 
                rounded-full absolute -right-3 top-9 
                border border-light-purple cursor-pointer
                ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex px-20">
          <BsImageFill
            className={`bg-white text-5xl
                    rounded cursor-pointer block float-left mr-2
                    ${!open && "scale-0"}`}
          />
        </div>
        <div
          className="flex items-center rounded-md  
                mt-20 py-2 "
        >
          <ul className="pt-2 ">
            <li
              className={`text-light-white text-sm flex items-center gap-x-4 
                    cursor-pointer  w-[100%]  p-6  hover:bg-white hover:text-black rounded-md
                    duration-300 `}
            >
              <MdSpaceDashboard className="text-black" />
              <NavLink exact="true" to="/">
                <span className={`${!open && "hidden"}`}>Dashboard</span>
              </NavLink>
            </li>
            <li
              className={`text-light-white text-sm flex items-center gap-x-4 
                    cursor-pointer  w-[100%]  p-6  hover:bg-white hover:text-black rounded-md
                    mt-4  duration-300`}
            >
              <IoWallet className="text-black" />
              <NavLink exact="true" to="/wallet">
                <span className={`${!open && "hidden"}`}>Wallet</span>
              </NavLink>
            </li>
            <li
              className={`text-light-white text-sm flex items-center gap-x-4 
                    cursor-pointer  w-[100%]  p-6  hover:bg-white hover:text-black rounded-md
                    mt-4 duration-300 `}
            >
              <GrTransaction className="text-black" />
              <NavLink exact="true" to="/transactions">
                <span className={`${!open && "hidden"}`}>Transactions</span>
              </NavLink>
            </li>
            <li
              className={`text-light-white text-sm flex items-center gap-x-4 
                    cursor-pointer  w-[100%]  p-6  hover:bg-white hover:text-black rounded-md
                    mt-4 duration-300 `}
            >
              <ImNotification className="text-black" />
              <NavLink exact="true" to="/help">
                <span className={`${!open && "hidden"}`}>Help</span>
              </NavLink>
            </li>
            <li
              className={`text-light-white text-sm flex items-center gap-x-4 
              cursor-pointer  w-[100%]  p-6  hover:bg-white hover:text-black rounded-md
              mt-4 duration-300 `}
            >
              <IoSettingsSharp className="text-black" />
              <NavLink exact="true" to="/Account">
                <span className={`duration-300 ${!open && "hidden"}`}>
                  Account
                </span>
              </NavLink>
            </li>
            <li
              className={`text-light-white text-sm flex items-center gap-x-4 
             cursor-pointer w-[100%]  p-6  hover:bg-white hover:text-black rounded-md
             mt-4 duration-300 `}
            >
              <MdOutlineLogout className="text-black" />
              <buttone onClick={handleLogout}>
                <span className={`duration-300 ${!open && "hidden"}`}>
                  logout
                </span>
              </buttone>
            </li>
            {/* <li>
              {" "}
              <NavLink to="signup">Signup</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
