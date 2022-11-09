import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Intro_fb_plus.css";
import Passes from "../HomePageAssets/intro_plus_passes-720.webp"
const Intro_fb_plus = () => {
  return (
    <Box>
    <Box
      display={"block"}
      bg="rgb(245,231,247)"
      h="auto"
      color="rgb(33,36,50)"
      textAlign={"center"}
      pt={"40px"}
      w="98.7%"
     m={"auto"}
      px="20px"
    >
      <Box m="auto" w={["auto", "300", "300px"]} lineHeight={"50px"}>
        <Text fontSize={"39px"}>Introducing</Text>
        <Text fontSize={"43px"} fontWeight="500">
          FB <span className="intro_fb_plus_span">Plus</span> Passes
        </Text>
      </Box>
      <Box w="395px" m="auto">
        <Text color={"rgb(78,82,98)"}>
          Passes give you full access to everything FB Plus has to offer,
          without a long-term subscription. Choose a pass that fits your budget
          and your schedule.
        </Text>
      </Box>
      <Box>
        <Button
          bgColor={"rgb(33,36,50)"}
          mt="20px"
          fontSize={"16px"}
          letterSpacing="0.1px"
          w={"145px"}
          h="45px"
          color={"white"}
          _hover={{
            bgGradient: "linear(to right, rgb(43, 45, 53), rgb(66,70,87))",
          }}
        >
          BUY A PASS
        </Button>
      </Box>
      <Box  alignContent={"center"} >
        <Image m="auto" src={Passes} alt="passes" />
      </Box>
    </Box>
    </Box>
  );
};

export default Intro_fb_plus;
