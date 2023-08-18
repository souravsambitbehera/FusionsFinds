import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import ProductCardShimmer from "../../shimmer/productShimmer/ProductCardShimmer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = () => {
  const { mode,product,loading } = useContext(myContext);
  const displayProducts = product.slice(0,4)
  const dispatch = useDispatch();
  const handleAddItem = (product)=>{
    const serializableProduct = {
      imageUrl: product.imageUrl,
      description: product.description,
      price: product.price,
      date: product.date,
      title:product.title,
      category: product.category,
    };
    dispatch(addToCart(serializableProduct))
    toast.success("add to cart successfully")
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 md:py-4 lg:px-10 mx-auto">
        <div className="lg:w-1/2 w-full mb-3 lg:mb-6">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-emerald-600 rounded"></div>
        </div>

        <div className="flex flex-wrap justify-center">
          {
            loading ? <ProductCardShimmer mode={mode}/>:
            displayProducts.map((product,index)=>{
              const {imageUrl,price,title,description} =product
              return (
                
                <div className="p-4 lg:w-72 md:w-72   drop-shadow-lg " key={index}>
                  <div
                    className=" border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className=" rounded-2xl w-64 h-64  p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                        src={imageUrl}
                        alt={description}
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        FusionsFinds
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                      <p
                        className="leading-relaxed mb-3"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {price}
                      </p>
                      <div className=" flex justify-center">
                        <button
                          type="button"
                          onClick={()=>handleAddItem(product)}
                          className="focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>
    </section>
  );
};

export default ProductCard