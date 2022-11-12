import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./SupportiveCommunity.css";
import SupportiveComm from "../HomePageAssets/home_page_community-2160.webp";

let SupportiveCommunity_object = {
  title: "Supportive Community",
  title_font_size: "38.5px",
  sub_title_fontsize: "16.5px",
  link_fontsize: "",
  sub_title:
    "Stay motivated and engaged with a little help from a supportive community of other members.",
  link_to_content: "Become a Member",
  color_of_link: "rgb(66,162,216)",
  image_related_to_section: SupportiveComm,
  color_of_text: "rgb(78,82,98)",
  back_ground_color: "rgb(239,251,255)",
};

const SupportiveCommunity = () => {
  return (
    <Box >
      <Box w="98.7%" m={"auto"}
       bgColor={SupportiveCommunity_object.back_ground_color} 
       pt={"30px"} 
       >
        <Box display={"block"} m="auto" w="400px" textAlign={"center"}>
          <Text
            fontSize={SupportiveCommunity_object.title_font_size}
            color={SupportiveCommunity_object.color_of_text}
            mb="10px"
          >
            {SupportiveCommunity_object.title}
          </Text>
          <Text
            fontSize={SupportiveCommunity_object.sub_title_fontsize}
            color={SupportiveCommunity_object.color_of_text}
            mb="10px"
          >
            {SupportiveCommunity_object.sub_title}
          </Text>
          <Text
            //   _hover={{ cursor: "pointer", borderBottom: "1px" }}

            color={SupportiveCommunity_object.color_of_link}
          >
            <span className="link_to_content_homepage">
              {SupportiveCommunity_object.link_to_content}
            </span>
          </Text>
        </Box>
        <Box>
          <Image
            src={SupportiveCommunity_object.image_related_to_section}
            alt={SupportiveCommunity_object.title}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SupportiveCommunity;
