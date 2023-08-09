
import React from 'react'
import myContext from './myContext'

const MyState = (props) => {
    const state = {
        name:"sourav",
        age:24
    }
  return (
    <myContext.Provider value={state}>
        {props.children}
        {/*  provide the value to any children component that use the context of myContext  */}
    </myContext.Provider>
  )
}

export default MyState