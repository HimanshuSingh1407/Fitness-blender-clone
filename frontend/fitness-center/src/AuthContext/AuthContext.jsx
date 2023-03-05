import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false);
//   const [isToken, setIsToken] = useState(null);
  const handleLogin = (token) => {
    setIsAuth(true);
    // setIsToken(token);
  };
  const handleLogOut = () => {
    setIsAuth(false);
    // setIsToken(null);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth,setIsAuth, handleLogin, handleLogOut}}
    >
      {children}
    </AuthContext.Provider>
  );
};
