import React from "react";
import "./Workout_video_section_main_page.css";
import "./Workout_video_section_main_page.css";
import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Workout_video from "../HomePageAssets/workouts-720_video.webp";
import Program_abs from "../HomePageAssets/programs-720_abs.webp";
import Wellness_articles from "../HomePageAssets/wellness_articles-720.webp";
import Healthy_recipe from "../HomePageAssets/_healthy_recipes-720.webp";

let Workout_video_section_main_page_Array = [
  {
    title: "Workout Videos",
    title_font_size: "38.5px",
    sub_title_fontsize: "16.5px",
    link_fontsize: "",
    sub_title:
      "Exercise with certified personal trainers whether you’re at home or on the road.",
    link_to_content: "Find a Workout",
    color_of_link: "rgb(66,162,216)",
    image_related_to_section: Workout_video,
    color_of_text: "rgb(78,82,98)",
    back_ground_color: "rgb(240,244,246)",
  },
  {
    title: "Programs",
    title_font_size: "38.5px",
    sub_title_fontsize: "",
    link_fontsize: "",
    sub_title:
      "Professionally designed programs take the guesswork out of exercising.",
    link_to_content: "Browse All Programs",
    color_of_link: "rgb(66,162,216)",
    image_related_to_section: Program_abs,
    color_of_text: "rgb(78,82,98)",
    back_ground_color: "rgb(249,252,253)",
  },
  {
    title: "Wellness Articles",
    title_font_size: "38.5px",
    sub_title_fontsize: "",
    link_fontsize: "",
    sub_title:
      "Research-backed articles to help you care for your body and mind.",
    link_to_content: "Learn from Experts",
    color_of_link: "rgb(66,162,216)",
    image_related_to_section: Wellness_articles,
    color_of_text: "rgb(255,255,255)",
    back_ground_color: "rgb(0,0,0)",
  },
  {
    title: "Healthy Recipes",
    title_font_size: "38.5px",
    sub_title_fontsize: "",
    link_fontsize: "",
    sub_title:
      "Fuel your day with recipes by Registered Dietitians and professional chefs.",
    link_to_content: "Find a Recipe",
    color_of_link: "rgb(66,162,216)",
    image_related_to_section: Healthy_recipe,
    color_of_text: "rgb(78,82,98)",
    back_ground_color: "rgb(216,217,218)",
  },
];
const Workout_video_section_main_page = () => {
  return (
    <Box>
      <Box w="98.7%" m={"auto"}>
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
                <Text
                  _hover={{ cursor: "pointer", border: "blue" }}
                  className="link_to_content_homepage"
                  color={item.color_of_link}
                >
                  {item.link_to_content}
                </Text>
              </Box>
              <Center>
                <Image src={item.image_related_to_section} alt={item.title} />
              </Center>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Workout_video_section_main_page;

//rgb(66,162,216"
