import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="signup">Signup</NavLink>
    </div>
  );
}

export default Navbar;
