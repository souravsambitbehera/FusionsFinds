import React from 'react'
import './Shimmer.css'

const ProductCardShimmer = ({mode}) => {
    const shimmerArray = Array.from({ length: 8 });
    return (
        <>
      {shimmerArray.map((_, index) => (
        <div className="p-4 lg:w-72 md:w-72 w-full drop-shadow-lg" key={index}>
          <div
            className={`h-full border-2 animate-pulse transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ${
              mode === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div className="w-full h-64 bg-gray-100 p-2 shimmer"></div>
            <div className="p-5 border-t-2 shimmer">
              <div className="h-4 bg-gray-100 mb-2 shimmer"></div>
              <div className="h-6 bg-gray-100 mb-3 shimmer"></div>
              <div className="h-4 bg-gray-100 mb-1 shimmer"></div>
              <div className="h-8 bg-gray-100 shimmer"></div>
            </div>
          </div>
        </div>
      ))}
    </>
      );
}

export default ProductCardShimmer