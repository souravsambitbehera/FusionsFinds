import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Navigate("/login");
    }
  }, [Navigate]);
  return children;
};

export default ProtectedRoutes;
