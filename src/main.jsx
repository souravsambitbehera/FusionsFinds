import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";
import MyState from "./context/data/myState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <MyState>
      <RouterProvider router={router}>
        {/* router is provide to the whole app */}
        <ToastContainer />
      </RouterProvider>
    </MyState>
    </Provider>
  </React.StrictMode>
);
