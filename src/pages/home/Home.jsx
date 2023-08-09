import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

const Home = () => {
  // const context = useContext(myContext)
  // here im consuming context by using useContext
  // console.log(context)
  // const {name,age}=context
  return (
    <div>Home
      <p>my name is  </p>
      <p>my age is </p>
    </div>
  )
}

export default Home