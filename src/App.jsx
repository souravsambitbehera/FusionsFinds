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

function App() {

  return (
    <>
    <MyState>
      {/* MyState is provide the context to the whole app */}
      <div className='text-3xl text-lime-400'>Welcome ...</div>
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
      }
    ]
  }
])



export default router
