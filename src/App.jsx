import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import AllProducts from "./pages/allproducts/AllProducts";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import AddProduct from "./pages/admin/pages/AddProduct";
import UppdateProduct from "./pages/admin/pages/UppdateProduct";
import { ProtectedRoutesForAdmin } from "./routes/ProtectedRoutesForAdmin";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProductInfo from "./pages/productInfo/ProductInfo";

function App() {
  return (
    <>
      <MyState>
        {/* MyState is provide the context to the whole app */}
        <Navbar />
        <Outlet />
        {/* use outlet bcz all the childreen of App component will show here.
       Navbar and Footer will be constant  */}
        <Footer />
      </MyState>
    </>
  );
}
// i'm using react router dom version 6.4
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productinfo/:id",
        element: <ProductInfo />,
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
    ],
  },
  
  {
    path: "cart",
    element: (
      <ProtectedRoutes>
        <Cart />
      </ProtectedRoutes>
    ),
  },
  {
    path: "order",
    element: (
      <ProtectedRoutes>
        <Order />
      </ProtectedRoutes>
    ),
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoutesForAdmin>
        <Dashboard />
      </ProtectedRoutesForAdmin>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "addproduct",
    element: (
      <ProtectedRoutesForAdmin>
        <AddProduct />
      </ProtectedRoutesForAdmin>
    ),
  },
  {
    path: "updateproduct",
    element: (
      <ProtectedRoutesForAdmin>
        <UppdateProduct />
      </ProtectedRoutesForAdmin>
    ),
  },
]);

export default router;
