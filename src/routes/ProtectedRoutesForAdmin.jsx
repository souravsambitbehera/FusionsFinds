import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ProtectedRoutesForAdmin = ({children}) => {
    const Navigate = useNavigate()
    const admin = JSON.parse(localStorage.getItem('user'))


    // console.log(admin?.user?.email)
    useEffect(()=>{
      if (admin?.user?.email !== 'souravsambit12@gmail.com') {
        Navigate("/login")
      }
    },[admin,Navigate])
    return children
    
  }