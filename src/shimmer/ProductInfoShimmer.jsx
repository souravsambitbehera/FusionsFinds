import React from 'react';
import './Shimmer.css'

const ProductInfoShimmer = () => {
    return (
        <section className="text-gray-600 font-roboto overflow-hidden">
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/3 w-full lg:h-auto bg-gray-300 rounded"></div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="w-1/2 h-6 bg-gray-300 mb-4"></h2>
                        <h1 className="w-2/3 h-8 bg-gray-300 mb-4"></h1>
                        <div className="flex mb-4">
                            <span className="w-1/3 h-4 bg-gray-300"></span>
                            <span className="w-1/4 h-4 bg-gray-300 ml-3"></span>
                        </div>
                        <p className="w-5/6 h-4 bg-gray-300 mb-4"></p>
                        <div className="flex justify-between">
                            <span className="w-1/4 h-8 bg-gray-300"></span>
                            <button className="w-1/4 h-10 bg-gray-300"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoShimmer;
