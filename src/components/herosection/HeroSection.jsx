import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";

const HeroSection = () => {
  const { toggleMode, mode } = useContext(myContext);

  return (
    <div
      className="bg-white"
      style={{ backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "" }}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between lg:px-12 px-4 lg:py-8 py-1 2xl:mx-auto 2xl:container">
        <div className="z-30 relative lg:w-1/2 ">
          <div
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }}
            className="hidden bg-gray-100 w-full lg:w-1/2 lg:h-full lg:flex justify-end items-center"
          >
            <div className="w-full lg:w-auto lg:-mr-32">
              <img
                src="hero-image-eccomerce1.jpg"
                alt="image with decent dresses"
                className="w-full relative z-30 lg:pl-16 px-4 py-10"
              />
            </div>
          </div>
          {/* <div className="absolute top-0  bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div> */}
          <div className="hidden w-full h-full lg:hidden">
            <img
              src="hero-image-eccomerce1.jpg"
              alt="image with decent dresses"
              className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
          className="lg:bg-gray-100 lg:w-2/3 lg:ml-16 lg:p-16 p-6 flex items-center"
        >
          <div>
            <h1
              className=" md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-serif  text-gray-800 capitalize"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Discover Unique Dress Crafts and Stylish Shoes
            </h1>
            <p
              className=" md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-sm leading-normal font-mono text-gray-600 mt-5"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Explore our handpicked collection of exquisite dress crafts and
              stylish shoes to elevate your fashion game. Whether you're looking
              for elegant dresses, trendy footwear, or eye-catching accessories,
              you'll find inspiration, quality, and style all in one place.
            </p>
            <Link to="allproducts">
              <button
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
                className="font-roboto sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-normal leading-none text-white py-4 px-8 bg-gray-800 flex items-center"
              >
                Explore
                <div className="ml-2 mt-0.5">
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 8H12.6666"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.6667L12.6667 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 5.33301L12.6667 7.99967"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
