import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Not_Sure_where_to_start_section.css";
import Impact from "../HomePageAssets/fb_low_impact_homepage.jpeg";
import Blend from "../HomePageAssets/fb_blend_homepage.jpeg";
import Inthirty from "../HomePageAssets/fb_30_homepage.jpeg";
import BodyWeight from "../HomePageAssets/fb_body_weight_homepage.jpeg";

const Not_Sure_where_to_start_array = [
  {
    title: "Perfect for Beginners",
    image_link_not_sure: Impact,
    program_duration_details: "4 WEEK PROGRAM - 34 MIN/DAY",
    program_duration_details_text_color: "rgb(66,150,213)",
    details_text:
      "FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less",
    details_text_color: "rgb(44,46,58)",
    programs_price: "$14.99",
  },
  {
    title: "You Choose",
    image_link_not_sure: Blend,
    program_duration_details: "4 WEEK PROGRAM - 38 MIN/DAY",
    program_duration_details_text_color: "rgb(66,150,213)",
    details_text:
      "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day",
    details_text_color: "rgb(44,46,58)",
    programs_price: "$14.99",
  },
  {
    title: "Short on Time?",
    image_link_not_sure: Inthirty,
    program_duration_details: "4 WEEK PROGRAM - 30 MIN/DAY",
    program_duration_details_text_color: "rgb(66,150,213)",
    details_text: "FB 30 - Fat Loss Program For Busy People (Round 4)",
    details_text_color: "rgb(44,46,58)",
    programs_price: "$14.99",
  },
  {
    title: "No Equipment Necessary",
    image_link_not_sure: BodyWeight,
    program_duration_details: "4 WEEK PROGRAM - 40 MIN/DAY",
    program_duration_details_text_color: "rgb(66,150,213)",
    details_text: "FB Bodyweight - Bodyweight Only Fat Loss Program",
    details_text_color: "rgb(44,46,58)",
    programs_price: "$14.99",
  },
];
const Not_Sure_where_to_start_section = () => {
  const [styleBorder, setStyleBorder] = useState({ color: "rgb(255 255 255)" });
  return (
    <Box px="15px" bgColor={"rgb(240,244,246)"} pb="50px">
      <Box px="25px" mt="70px" mb="35px">
        <Text fontSize={["30px", "30px", "30px", "45px", "45px"]}>
          Not sure where to start?
        </Text>
      </Box>
      <Box px="25px" mt="40px" mb="25px">
        <Text fontSize={"16px"}>
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </Text>
      </Box>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        px="25px"
       
      >
        {Not_Sure_where_to_start_array.map((item) => (
          <GridItem w="100%" key={item.title}>
            <Box mt="45px">
              <Text
                fontWeight="600"
                fontSize={"17px"}
                mb="20px"
                color={item.details_text_color}
              >
                {item.title}
              </Text>
            </Box>
            <Box>
              <div w="100%" className="homepage_last_not_sure_section">
                <Box>
                  <Image
                    w={"100%"}
                    src={item.image_link_not_sure}
                    alt={item.title}
                  />
                </Box>
                <Box px="20px">
                  <Text
                    fontSize={"14px"}
                    mt="13px"
                    color={item.program_duration_details_text_color}
                  >
                    {item.program_duration_details}
                  </Text>
                </Box>
                <Box px="20px">
                  <Text fontSize={"16px"} fontWeight="600" mt="5px">
                    {item.details_text}
                  </Text>
                </Box>
                <Box px="20px" pb="15px" mt="30px" mb="10px">
                  <Text
                    fontSize={"14px"}
                    fontWeight="600"
                    color={item.details_text_color}
                  >
                    {item.programs_price}
                  </Text>
                </Box>
              </div>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Box px="25px" width={"180px"} mt="40px">
        <Text
          display={"block"}
          _hover={{ borderBottom: "2px", borderColor: "rgb(66,150,213)" }}
          color={"rgb(66,150,213)"}
        >
          View All Programs
        </Text>
      </Box>
    </Box>
  );
};

export default Not_Sure_where_to_start_section;
