import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet/Wallet";
import AddedPage from "./pages/AddedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="register" element={<Register />} />
          <Route path="addedPage" element={<AddedPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";

// import { Routes, Route } from "react-router-dom";

// // import Navbar from "./components/Navbar";
// import Login from "./components/AuthPages/Login";
// import Home from "./components/Home";
// import Signup from "./components/AuthPages/Signup";
// import SideBar from "./components/Sidebar";
// import RoutingComponent from "./components/RoutingComponent/RoutingComponent";
// import { useContext, useEffect } from "react";
// import { dataContext } from "./components/ContexProvider/MyContext";
// import { useAuth } from "./components/AuthPages/auth";

// function App() {
//   const { isLoggedIn, transactionData, loginSignupToggle } =
//     useContext(dataContext);

//   // console.log(transactionData);
//   if (transactionData === null) {
//     // Render a loading indicator
//     return (
//       <div className="text-center">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   const { authState, login } = useAuth();
//   const b4 = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
//   // console.log(b4);
//   const onUpdateToken = async () => {
//     try {
//       const response = await fetch(
//         "http://127.0.0.1:5555/refresh-token-endpoint",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         const data = await response.json();
//         const newAccessToken = login(data.access_token);
//         return newAccessToken;
//       } else {
//         // Handle error or return null if token refresh fails
//         return null;
//       }
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//       return null;
//     }
//   };

//   return (
//     <div className="App  ">
//       <RoutingComponent />
//     </div>
//   );
// }

// export default App;

// // return (
// //   <div className="App  ">
// //     {!isLoggedIn ? ( // Check if the user is not logged in
// //       loginSignupToggle ? ( // Check if the user wants to sign up
// //         <Signup />
// //       ) : (
// //         <Login />
// //       )
// //     ) : (
// //       <RoutingComponent />
// //     )}
// //   </div>
// // );
