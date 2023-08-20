import React, { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import Filter from "../../components/filter/Filter";
import { useNavigate,Link } from "react-router-dom";
import ProductCardShimmer from "../../shimmer/ProductCardShimmer";

const AllProducts = () => {
  const {
    mode,
    product,
    loading,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    setFilterPrice,
    filterPrice,
  } = useContext(myContext);
  const displayProducts = product;
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function generateUniqueID() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 10000).toString();
    return `${timestamp}-${random}`;
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const handleAddItem = (product) => {
    const serializableProduct = {
      imageUrl: product.imageUrl,
      description: product.description,
      price: product.price,
      date: product.date,
      time: product.time.toDate().toString(),
      id: generateUniqueID(),
      title: product.title,

      category: product.category,
    };
    dispatch(addToCart(serializableProduct));
    toast.success("add to cart successfully");
  };
  return (
    <>
      {/* <Offer/> */}
      <Filter />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 md:py-4 lg:px-10 mx-auto">
          <div className="lg:w-1/2 w-full mb-3 lg:mb-6">
            <h1
              className="sm:text-3xl text-2xl font-medium font-serif title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-emerald-600 rounded"></div>
          </div>

          <div className="flex flex-wrap justify-center">
            {loading ? (
              <ProductCardShimmer mode={mode} />
            ) : (
              product
                .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                .filter((obj) =>
                  obj.category.toLowerCase().includes(filterType)
                )
                .filter((obj) => obj.price.includes(filterPrice))
                .map((product, index) => {
                  const { imageUrl, price, title, description } = product;
                  return (
                    <div
                      className="p-4 lg:w-72 md:w-72   drop-shadow-lg "
                      key={index}
                    onClick={()=>navigate(`/productinfo/${product.id}`)}

                    >
                      <div
                        className="font-roboto border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                        style={{
                          backgroundColor:
                            mode === "dark" ? "rgb(46 49 55)" : "",
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
                            className="title-font text-lg font-medium text-gray-700 mb-3"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {title}
                          </h1>
                          {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                          <p
                            className="font-roboto leading-relaxed mb-3"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {price}
                          </p>
                          <div className=" flex justify-center">
                            {user ? (
                              <button
                                type="button"
                                onClick={() => handleAddItem(product)}
                                className="font-montserrat focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                              >
                                Add To Cart
                              </button>
                            ) : (
                              <Link
                                to="/signup"
                                className="font-roboto focus:outline-none text-center text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                              >
                                Add To Cart
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
