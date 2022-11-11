import { Box, Button, Divider, FormControl, FormErrorMessage, FormHelperText, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Login_page.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
const initalLogin={
  username:"",
  password:""
}

const Login_page = () => {
  const [login,setLogin]=useState(initalLogin)

  

const handleLogin=async()=>
  {
    console.log(login)
    let res=await axios.post(`http://localhost:8080/users/login`,login)
    console.log(res.data)
  }
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
      <Box display={"flex"} justifyContent="center" px={["3%","3%","10%","10%","10%"]} alignItems={"center"}>
        <Divider />
        <Text px="10px" fontSize={"14px"} fontWeight="500">
          OR
        </Text>
        <Divider />
      </Box>
      <Box  >
 
      <FormControl
    m="auto"
    mt={"20px"}
        borderRadius="1px"
        w="350px"
       
        fontFamily={"sans-serif"}
      >
    
        <Input mb="20px"
        type="text" placeholder='username' onChange={(e)=>setLogin({...login,username:e.target.value})}
        />
        <Input mb="20px"
       type="password" placeholder='password' onChange={(e)=>setLogin({...login,password:e.target.value})} 
        />
        <Button  w="350px" bgColor={"rgb(65,152,203)"} color="rgb(255 255 255)" _hover={{
              bgGradient: "linear(to right,rgb(48,179,205), rgb(63,154,203))",
            }}
       onClick={handleLogin}
        >
          Sign in
        </Button>
      </FormControl>
      </Box>
    </Stack>
  );
};

export default Login_page;
