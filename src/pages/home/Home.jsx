import React, { useContext } from "react";
import HeroSection from "../../components/herosection/HeroSection";
import Track from "../../components/track/Track";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  // const context = useContext(myContext)
  // here im consuming context by using useContext
  // console.log(context)
  // const {name,age}=context
  return (
    <div>
      <HeroSection />
      <ProductCard />
      <Track />
      <Filter />
      
      <Testimonial />
    </div>
  );
};

export default Home;
