import React, { useContext } from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import Track from '../../components/track/Track'
import Filter from '../../components/filter/Filter'

const Home = () => {
  // const context = useContext(myContext)
  // here im consuming context by using useContext
  // console.log(context)
  // const {name,age}=context
  return (
    <div>
      <HeroSection />
      <Track/>
      <Filter/>
    </div>
  )
}

export default Home