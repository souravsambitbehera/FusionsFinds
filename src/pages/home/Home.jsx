import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import Track from '../../components/track/Track'

const Home = () => {
  // const context = useContext(myContext)
  // here im consuming context by using useContext
  // console.log(context)
  // const {name,age}=context
  return (
    <div>
      <HeroSection />
      <Track/>
      
    </div>
  )
}

export default Home