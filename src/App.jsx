import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import NoPage from './pages/nopage/NoPage'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import MyState from './context/data/myState'
import AllProducts from './pages/allproducts/AllProducts'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import AddProduct from './pages/admin/pages/AddProduct'
import UppdateProduct from './pages/admin/pages/UppdateProduct'

function App() {

  return (
    <>
    <MyState>
      {/* MyState is provide the context to the whole app */}
      <Navbar/>
      <Outlet /> 
      {/* use outlet bcz all the childreen of App component will show here.
       Navbar and Footer will be constant  */}
      <Footer/>
      </MyState>
    </>
  )
}
// i'm using react router dom version 6.4
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NoPage />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"order",
        element:<Order/>
      },
      {
        path:"cart",
        element:<Cart/>
      },

      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"allproducts",
        element:<AllProducts/>
      }
    
    ]
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"signup",
    element:<Signup/>
  },
  {
    path:"addproduct",
    element:<AddProduct/>
  },
  {
    path:"updateproduct",
    element:<UppdateProduct/>
  }
])



export default router
