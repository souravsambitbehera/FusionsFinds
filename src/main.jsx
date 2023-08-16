import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";
import MyState from "./context/data/myState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyState>
      <RouterProvider router={router}>
        {/* router is provide to the whole app */}
        <ToastContainer />
      </RouterProvider>
    </MyState>
  </React.StrictMode>
);
