
import React, { useState,useEffect } from 'react'
import myContext from './myContext' 
import { fireDb } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast,ToastContainer } from 'react-toastify';


const MyState = (props) => {
  const [mode,setMode]= useState("light");
  const[loading,setLoading] =useState(false)

    const toggleMode = ()=>{
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = 'rgb(17,24,39)';
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white"
      }
    }
    const [products, setProducts] = useState({
      title: "",
      price: "",
      imageUrl: "",
      category: "",
      description: "",
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
  
    })
    // Add Product Section
    const addProduct = async () => {
      if (products.title == "" || products.price == "" || products.imageUrl == "" || products.category == "" || products.description == "") {
        return toast.error('Please fill all fields')
      }
      const productRef = collection(fireDb, "products")
      setLoading(true)
      try {
        await addDoc(productRef, products)
        toast.success("Product Add successfully")
        setTimeout(()=>{
          window.location.href = "/dashboard"; // Assign the new URL as a string

        },800)
        getProductData()
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setProducts("")
    }

    const [product, setProduct] = useState([]);

    // ****** get product
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(fireDb, "products"),
          orderBy("time"),
          // limit(5)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productsArray = [];
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setProduct(productsArray)
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  
    useEffect(() => {
      getProductData();
    }, []);


  return (
    <myContext.Provider value={{mode,toggleMode,loading,setLoading,products,setProducts,addProduct,product}}>
        {props.children}
        {/*  provide the value to any children component that use the context of myContext  */}
        <ToastContainer />
    </myContext.Provider>
  )
}

export default MyState