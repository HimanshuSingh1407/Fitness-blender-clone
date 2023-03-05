import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [])
  
  return children;
  
};

export default PrivateRoute;
