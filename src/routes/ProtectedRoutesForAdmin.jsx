import { useNavigate } from "react-router-dom"

export const ProtectedRoutesForAdmin = ({children}) => {
    const Navigate = useNavigate()
    const admin = JSON.parse(localStorage.getItem('user'))
    console.log(admin?.user?.email)
    if (admin?.user?.email === 'souravsambit12@gmail.com') {
      return children
    }
    else {
      return <Navigate to='/login' />
    }
  }