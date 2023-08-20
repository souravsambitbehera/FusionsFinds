import React, { useState, useEffect } from "react";
import myContext from "./myContext";
import { fireDb } from "../../firebase/FirebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  // Add Product Section
  const addProduct = async () => {
    if (
      products.title == "" ||
      products.price == "" ||
      products.imageUrl == "" ||
      products.category == "" ||
      products.description == ""
    ) {
      return toast.error("Please fill all fields");
    }
    const productRef = collection(fireDb, "products");
    setLoading(true);
    try {
      await addDoc(productRef, products);
      toast.success("Product Add successfully");
      setTimeout(() => {
        window.location.href = "/dashboard"; // Assign the new URL as a string
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDb, "products"),
        orderBy("time")
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // update section
  const editHandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDb, "products", products.id), products);
      toast.success("Product Updated successfully");
      setTimeout(() => {
        window.location.href = "/dashboard"; // Assign the new URL as a string
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setProducts("");
  };
  // delete section
  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDb, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false);
    }
  };
  // get order on ui
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDb, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      // console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData();
  }, []);
  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <myContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        updateProduct,
        deleteProduct,
        editHandle,
        order,searchkey,setSearchkey,filterType,setFilterType,setFilterPrice,filterPrice
      }}
    >
      {props.children}
      {/*  provide the value to any children component that use the context of myContext  */}
      <ToastContainer />
    </myContext.Provider>
  );
};

export default MyState;
