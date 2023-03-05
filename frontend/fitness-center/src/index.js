import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./api";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <Provider store={store}>
    <BrowserRouter>
     <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </Provider>
  </AuthContextProvider>
   
  
);


reportWebVitals();
