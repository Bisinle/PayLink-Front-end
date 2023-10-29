import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
// import { } from "./components/ContexProvider/MyContext.jsx";
import MyContext from "./components/ContexProvider/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <Router>
        <App />
      </Router>
    </MyContext>
  </React.StrictMode>
);
