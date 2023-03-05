import {
  Box,
  Button,
  Divider,
  useToast,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import "./Login_page.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";

const initalLogin = {
  username: "",
  password: "",
};

const Login_page = () => {
  const [login, setLogin] = useState(initalLogin);
  const toast = useToast();
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const handleLogin = async () => {
    if (login.username === "" || login.password === "") {
      return toast({
        title: "Empty Field.",
        description: "Please enter all the fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      axios
        .post(`https://backend-server-300e.onrender.com/users/login`, login)
        .then((res) => {
         if(login.username === res.data.username){
          localStorage.setItem("auth",JSON.stringify(res.data));
            setIsAuth(true)
            toast({
              title:  "Login successfull" ,
              description:`You have loggedin successfully.`,
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
            navigate("/")
        }
        })
        .catch((err) => {
          return toast({
            title:  err.response.data ,
            description:`Enter Correct ${err.response.data}.`,
            status: "warning",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        });
      // try{

     
      // }catch(e){
      //   setError(e.response.data)
      // }
    }
  };

  return (
    <Stack width={"100%"} textAlign="center" h={"100vh"} px={"3%"}>
      <Box mt="100px" mb="30px">
        <Text fontSize={"25px"}>Sign In</Text>
      </Box>
      <Box
        display={["block", "block", "flex", "flex", "flex"]}
        justifyContent="center"
        gap="10px"
      >
        <Button
          leftIcon={<FaFacebookF />}
          justifyContent="space-between"
          pr={["200px", "200px", "140px", "140px", "100px"]}
          w={["90%", "90%", "40%", "20%", "20%"]}
          bgColor="rgb(63,102,182)"
          color="rgb(255 255 255)"
          variant="solid"
          mb="15px"
        >
          FACEBOOK
        </Button>
        <Button
          leftIcon={<FaGoogle />}
          justifyContent="space-between"
          pr={["200px", "200px", "140px", "140px", "100px"]}
          w={["90%", "90%", "40%", "20%", "20%"]}
          color="rgb(255 255 255)"
          bgColor="rgb(219,74,60)"
          variant="solid"
          mb="15px"
        >
          GOOGLE
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        px={["3%", "3%", "10%", "10%", "10%"]}
        alignItems={"center"}
      >
        <Divider />
        <Text px="10px" fontSize={"14px"} fontWeight="500">
          OR
        </Text>
        <Divider />
      </Box>
      <Box display={"flex"} justifyContent="center" alignItems="center">
        <Box w="350px">
          <form
            m="auto"
            mt={"20px"}
            borderRadius="1px"
            fontFamily={"sans-serif"}
          >
            <Input
              isRequired
              mb="20px"
              type="text"
              placeholder="username"
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
              required
            />
            <Input
              isRequired
              mb="20px"
              type="password"
              placeholder="password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              required
            />

            <Input
              textAlign="center"
              w="350px"
              bgColor={"rgb(65,152,203)"}
              color="rgb(255 255 255)"
              _hover={{
                bgGradient: "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                cursor: "pointer",
              }}
              onClick={handleLogin}
              value="Sign in"
            />
          </form>
          <Text mt={"30px"}>
            Not signed up ?{" "}
            <Link style={{ color: "teal" }} to={"/signup"}>
              signup
            </Link>{" "}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login_page;
