import React, { useEffect, useState } from "react";
import "./Sign_Up_page.css";
import axios from "axios";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import {
  Box,
  Button,
  Divider,
  Input,
  Stack,
  Text,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useNavigate,Link } from "react-router-dom";

const initalValue = {
  fname: "",
  lname: "",
  email: "",
  username: "",
  password: "",
};

const Sign_Up_page = () => {
  const [user, setUser] = useState(initalValue);
  const toast=useToast();
  const navigate=useNavigate();
  
  useEffect(() => {
    document.title="SignUp Page"
  }, [])
  
  const handleSignup = async (e) => {
    e.preventDefault()
    if(user.fname ==="" || user.lname ==="" || user.email==="" || user.password==="" || user.username===""){
     return toast({
        title: 'Empty Field.',
        description: "Please enter all the fields",
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    }else{
     let res= await axios.post(`https://backend-server-300e.onrender.com/users/signup`, user);
      if(res.data.fname === user.fname){
          navigate("/login")
      }
    }
    
  };
 
  return (
    <Stack width={"100%"} textAlign="center" h={"100vh"} px={"3%"}>
      <Box mt="100px" mb="30px">
        <Text fontSize={"25px"}>JOIN</Text>
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
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
      <Box w="350px" margin={"auto"}  >
        <form
         onSubmit={handleSignup}
          m="auto"
          mt={"20px"}
          borderRadius="1px"
          
          fontFamily={"sans-serif"}
         >
          <Input
            required
            mb="20px"
            type="text"
            placeholder="first name"
            onChange={(e) => setUser({ ...user, fname: e.target.value })}
          />
          <Input
            required
            mb="20px"
            type="text"
            placeholder="last name"
            onChange={(e) => setUser({ ...user, lname: e.target.value })}
          />
          <Input
            required
            mb="20px"
            type="email"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            required
            mb="20px"
            type="text"
            placeholder="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            
          />
          <Input
            required
            mb="20px"
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Input
          type={"submit"}
          textAlign={"center"}
            w="350px"
            bgColor={"rgb(65,152,203)"}
            color="rgb(255 255 255)"
            _hover={{
              bgGradient: "linear(to right,rgb(48,179,205), rgb(63,154,203))",
            }}
            onClick={handleSignup}
            value="JOIN"
          />
          
         
        </form>
      </Box>
      </Box>
      <VStack pt="100px" pb="100px" >
        <Text  color="rgb(123,127,146)">
          Already a member? {" "}
          <Link to={"/login"} >
          <span className="signUp_page_signin_link" >Sign In</span>
          </Link>
          {" "}
        </Text>
      </VStack>
    </Stack>
  );
};

export default Sign_Up_page;
