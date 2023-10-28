import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/AuthPages/Login";
import Home from "./components/Home";
import Signup from "./components/AuthPages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-4xl text-white bg-indigo-500">Welcom to my App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

// return (
//   // <>
//   //   <Navbar />
//   //
//   //
//   // </>

// )
