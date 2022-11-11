import React from 'react'
import { Box, Button, Center, Grid, GridItem, Text } from "@chakra-ui/react";


let Workout_video_section_main_page_Array = [
    {
      title: "FB Plus",
      title_font_size: "38.5px",
      sub_title_fontsize: "16.5px",
      sub_title:
        "Get exclusive content and access to programs and challenges, with advanced features to help you reach and maintain your goals.",
      link_to_content: "Learn More About FB Plus",
      color_of_link: "rgb(66,162,216)",
      
      color_of_text: "rgb(78,82,98)",
      back_ground_color: "rgb(237,248,252)",
      button_text:"JOIN WITH PLUS"

    },
    {
      title: "JOIN FOR FREE",
      title_font_size: "38.5px",
      sub_title_fontsize: "16.5px",

      sub_title:
        "Enjoy hundreds of workout videos, articles, and recipes, with new content every week. No strings attached, no credit card required.",
      color_of_text: "rgb(78,82,98)",
      back_ground_color: "rgb(240,244,246)",
      button_text:"JOIN FOR FREE"
    }
  ]

const MemberShip_join_with_plus = () => {
  return (
    <Box >
    <Box w="98.7%" m={"auto"} >
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={2}
      >
        {Workout_video_section_main_page_Array.map((item) => (
          <GridItem
            key={item.title}
            w="100%"
            pb="40px"
            h="auto"
            bg={item.back_ground_color}
            pt="35px"
          >
            <Box display={"block"} m="auto" w="400px" textAlign={"center"}>
              <Text
                fontSize={item.title_font_size}
                color={item.color_of_text}
                mb="10px"
              >
                {item.title}
              </Text>
              <Text
                fontSize={item.sub_title_fontsize}
                color={item.color_of_text}
                mb="10px"
              >
                {item.sub_title}
              </Text>
              <Box>
        <Button
          bgColor={"rgb(33,36,50)"}
          mt="20px"
         mb="15px"
          fontSize={"16px"}
          letterSpacing="0.1px"
          w={"200px"}
          h="50px"
          color={"white"}
          _hover={{
            bgGradient: "linear(to right, rgb(43, 45, 53), rgb(66,70,87))",
          }}
        >
         {item.button_text}
        </Button>
      </Box>
              <Text
                //   _hover={{ cursor: "pointer", borderBottom: "1px" }}

                color={item.color_of_link}
              >
                <span className="link_to_content_homepage">
                  {item.link_to_content}
                </span>
              </Text>
            </Box>
           
          </GridItem>
        ))}
      </Grid>
    </Box>
  </Box>
  )
}

export default MemberShip_join_with_plus