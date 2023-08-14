import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword,signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import { toast,ToastContainer } from 'react-toastify';
import { useState,useContext } from 'react';
import myContext from '../../context/data/myContext';
import Loader from '../../firebase/Loader';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading , setLoading} = useContext(myContext)
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    

    useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[navigate,user])

    const handleLoginClick = async () => {
        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            localStorage?.setItem("user",JSON.stringify(userCredential));
            // User successfully logged in
            // console.log('User logged in:', userCredential.user);
            setEmail("")
            setPassword("")
            toast.success('Login Success');
            navigate('/')
            setLoading(false)

        } catch (error) {
            // console.error('Login Error:', error);
            toast.error('Login Failed');
            setLoading(false)
            
        }
    };
    const handleGuestLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, "sambit@gmail.com", "859812");
            localStorage.setItem("user",JSON.stringify(userCredential));
            // await signInAnonymously(auth);
            
            toast.success('Guest mode login success');
            navigate('/')
        } catch (error) {
            toast.error('Guest mode login failed');
        }
    };
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader/>}

            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleLoginClick();
                            }
                        }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleLoginClick();
                            }
                        }}
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button onClick={handleLoginClick}
                        className=' bg-emerald-700 w-full text-black font-bold  px-1 py-1 rounded-lg'>
                        Login
                    </button>
                    <button onClick={handleGuestLogin} className='bg-gray-600 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Guest Mode
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-emerald-500 font-bold' to='/signup'>Signup</Link></h2>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Login