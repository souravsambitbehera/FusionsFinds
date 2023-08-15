
import React, { useState,useEffect } from 'react'
import myContext from './myContext' 
import { fireDb } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';


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
      title: null,
      price: null,
      imageUrl: null,
      category: null,
      description: null,
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
      if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
        return toast.error('Please fill all fields')
      }
      const productRef = collection(fireDb, "products")
      setLoading(true)
      try {
        await addDoc(productRef, products)
        toast.success("Product Add successfully")
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
    </myContext.Provider>
  )
}

export default MyState