import React from 'react'
import { useNavigate } from "react-router-dom"

const ProtectedRoutes = ({children}) => {
    const Navigate = useNavigate()
    if (localStorage.getItem('user')) {
        return children
      }
      else {
        return <Navigate to='/login' />
      }
}

export default ProtectedRoutes