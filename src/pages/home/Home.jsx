import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

const Home = () => {
  const context = useContext(myContext)
  // here im consuming context by using useContext
  console.log(context)
  const {name,age}=context
  return (
    <div>Home
      <p>my name is  {name}</p>
      <p>my age is {age}</p>
    </div>
  )
}

export default Home