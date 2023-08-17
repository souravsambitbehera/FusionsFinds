import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

const Offer = () => {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <>
      <div
        className="bg-white"
        style={{ backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "" }}
      >
        <div className="px-1 py-8">
          <div
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }}
            className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-100 lg:px-20 md:px-6 px-4 py-12"
          >
            <div className="lg:flex md:flex block">
              <div className="flex">
                <div className="bg-gray-800 max-w-[66px] w-full">
                  <p className="xl:text-2xl lg:text-base font-semibold leading-normal text-white -rotate-90 whitespace-nowrap 2xl:mt-32 xl:mt-[130px] lg:mt-[140%] md:mt-[85px] mt-28">
                    Upto 50% Off
                  </p>
                </div>
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20194.png"
                    alt="shoes"
                    className="lg:hidden md:hidden block"
                  />
                </div>
              </div>
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20194.png"
                  alt="shoes"
                  className=" md:block hidden"
                />
                {/* <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ff.png"
                      alt=""
                      className="lg:hidden md:block hidden"
                    /> */}
              </div>
              <div className="bg-gray-800 lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                  Modern Fashion
                </p>
                <p className="text-xs text-center text-white pt-4">
                  Shop enchanting designs with bold and classy colors at
                  discunted price
                </p>
              </div>
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shoes.png"
                  alt="sandles"
                  className="block"
                />
                {/* <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shoes2.png"
                      alt=""
                      className="lg:hidden md:block hidden"
                    /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
