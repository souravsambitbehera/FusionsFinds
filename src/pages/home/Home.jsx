import React, { useContext } from "react";
import HeroSection from "../../components/herosection/HeroSection";
import Track from "../../components/track/Track";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import { useEffect } from "react";

const Home = () => {
  // const context = useContext(myContext)
  // here im consuming context by using useContext
  // console.log(context)
  // const {name,age}=context
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <HeroSection />
      <ProductCard />
      <Track />
      {/* <Filter /> */}
      
      <Testimonial />
    </div>
  );
};

export default Home;
