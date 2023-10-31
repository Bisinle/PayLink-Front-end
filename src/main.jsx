import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
// import { } from "./components/ContexProvider/MyContext.jsx";
import MyContext from "./components/ContexProvider/MyContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MyContext>
        <Router>
          <App />
        </Router>
      </MyContext>
    </ThemeProvider>
  </React.StrictMode>
);
