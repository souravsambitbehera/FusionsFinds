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

function App() {

  return (
    <>
      <div className='text-3xl text-lime-400'>Welcome ...</div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}
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
      }
    ]
  }
])



export default router
