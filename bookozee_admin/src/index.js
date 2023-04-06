import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/AuthContext";
// axios.defaults.baseURL = "https://bookozee-backend.vercel.app/api";
axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
