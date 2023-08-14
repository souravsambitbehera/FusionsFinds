import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Order = () => {
  // const {name,age}=useContext(myContext)
  return (<>
  <Navbar/>

<div>Order by </div>
<Footer/>
  </>
    
  )
}

export default Order