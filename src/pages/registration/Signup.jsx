import React, { useContext, useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../firebase/Loader';
import { toast,ToastContainer } from 'react-toastify';
import { createUserWithEmailAndPassword, signInAnonymously,signInWithEmailAndPassword } from "firebase/auth";

import { fireDb,auth } from '../../firebase/FirebaseConfig';
import myContext from '../../context/data/myContext';
import { addDoc, collection } from 'firebase/firestore';

const Signup = () => {

        const [name,setName]= useState("");
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const {loading , setLoading} = useContext(myContext)
        const navigate = useNavigate()
        const user = JSON.parse(localStorage.getItem('user'))
    const guestEmail = import.meta.env.VITE_REACT_APP_GUEST_EMAIL;
    const guestPassword = import.meta.env.VITE_REACT_APP_GUEST_PASSWORD;


    

    useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[navigate,user])


        const signup = async ()=>{
            setLoading(true)
            console.log(name,email,password)
            if(name==="" || email==="" || password===""){
                return toast.error("all fileds are required")
            }
            try {
                const users = await createUserWithEmailAndPassword(auth,email,password)
                // console.log(users)
                const user = {
                    name:name,
                    uid:users.user.uid,
                    email:users.user.email
                }
                const userRef = collection(fireDb, "user")
                await addDoc(userRef,user)
                setName("")
                setEmail("")
                setPassword("")
                toast.success("Signup succes")
                navigate("/login")
                setLoading(false)
                
            } catch (error) {
                // console.log(error)
                toast.error("Signup Failed")
                setLoading(false)
            }
        }
        const handleGuestLogin = async () => {
            try {
                const userCredential = await signInWithEmailAndPassword(auth,guestEmail, guestPassword);
            localStorage.setItem("user",JSON.stringify(userCredential));
                toast.success('Guest mode login success');
                navigate("/")
            } catch (error) {
                toast.error('Guest mode login failed');
            }
        };
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                    value={name}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    onChange={(e)=>setName(e.target.value)}

                    />
                </div>
                <div>
                    <input type="email"
                    value={email}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}

                    />
                </div>
                <div>
                    <input
                    value={password}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}

                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button onClick={signup}
                        className=' bg-emerald-700 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                    <button onClick={handleGuestLogin} className='bg-gray-600 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Guest Mode
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Already have an account <Link className=' text-emerald-500 font-bold' to='/login'>Login</Link></h2>
                </div>
            </div>
      <ToastContainer />

        </div>
    )
}

export default Signup