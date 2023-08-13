
import React, { useState } from 'react'
import myContext from './myContext'

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
  return (
    <myContext.Provider value={{mode,toggleMode,loading,setLoading}}>
        {props.children}
        {/*  provide the value to any children component that use the context of myContext  */}
    </myContext.Provider>
  )
}

export default MyState