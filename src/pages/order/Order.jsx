import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

const Order = () => {
  const {name,age}=useContext(myContext)
  return (
    <div>Order by {name}</div>
  )
}

export default Order