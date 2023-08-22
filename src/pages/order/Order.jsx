import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const Order = () => {
  const {mode,loading,order}=useContext(myContext);
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log('User:', user);
  const userid = user ? user.user.uid : null;
  // console.log('UserID:', userid);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Navbar />

      {order.length > 0 ?
        (<>
          <div className=" h-full pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order,index) => {
                // order.cartItems.map()
                return (
                  <div key={index+1} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {
                      order.cartItems.map((item,index) => {
                        return (
                          <div key={index+1} className="rounded-lg md:w-2/3">
                            <div className="justify-between flex-col mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                              <img src={item.imageUrl} alt="product-image" className="w-52 h-52 rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                  {/* <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p> */}
                                  <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <h2 className=' text-center tex-2xl text-white'>Not Order</h2>
        )

      }
      <Footer />
    </>
  );
};

export default Order;
