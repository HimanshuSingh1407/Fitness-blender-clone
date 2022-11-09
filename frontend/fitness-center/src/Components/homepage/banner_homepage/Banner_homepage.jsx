import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Banner_homepage.css";
import Team9 from "../HomePageAssets/banner_team_9_pics.webp";
const Banner_homepage = () => {
  return (
    <Box
      bgGradient="linear(to bottom right, rgb(60,153,205), rgb(23,214,189))"
      w="100%"
      h="auto"
      display={["block", "block", "block", "flex", "flex"]}
      color="white"
    >
      <Center
        w={["100%", "100%", "100%", "50%", "50%"]}
        className="banner_left"
        p={["70px","100px", "100px", "130px", "130px"]}
        alignContent="center"
        //   bgColor="blue"
      >
        <Center display={"block"}>
          <Text
            lineHeight={"40px"}
            fontSize={["40px", "40px", "40px", "45px", "45px"]}
            textAlign={["center", "center", "center", "left", "left"]}
          >
            Feel Great.
          </Text>
          <Text
            fontSize={["40px", "40px", "40px", "45px", "45px"]}
            textAlign={["center", "center", "center", "left", "left"]}
          >
            Body and Mind.
          </Text>
          <Text
            fontSize={"19px"}
            textAlign={["center", "center", "center", "left", "left"]}
          >
            Choose from hundreds of workouts, healthy recipes, relaxing
            meditations, and expert articles, for a whole body and mind approach
            to feeling great.
          </Text>
          <Button
            bgColor={"rgb(33,36,50)"}
            mt="15px"
            fontSize={"16px"}
            letterSpacing="0.1px"
            w={"145px"}
            h="45px"
            _hover={{
              bgGradient: "linear(to right, rgb(43, 45, 53), rgb(66,70,87))",
            }}
          >
            JOIN NOW
          </Button>
        </Center>
      </Center>
      <Center
        w={["100%", "100%", "100%", "50%"]}
        //   bgColor="red"
        className="banner_right"
        pr="40px"
      >
        <Center>
          <Image src={Team9} alt="team" />
        </Center>
      </Center>
    </Box>
  );
};

export default Banner_homepage;
