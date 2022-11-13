import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
//   const dummydata = "Vikash";
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
      value={{ isAuth, handleLogin, handleLogOut}}
    >
      {children}
    </AuthContext.Provider>
  );
};
