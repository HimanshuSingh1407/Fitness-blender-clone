import React, { useState } from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import MainLogo from "../HomePageAssets/fitness_center_main_logo-no_bg.png";
import LadyOnYogaMat from "../HomePageAssets/lady_on_yoga_mat-removebg-preview.png";
import WorkoutFingerPrint from "../HomePageAssets/workout_fingerprint-removebg-preview.png";
import ProgramTickyes from "../HomePageAssets/task_tick_yes-removebg-preview.png";
import MealPlanApple from "../HomePageAssets/meal_Plan_apple-removebg-preview.png";
import PilotPlanGear from "../HomePageAssets/pilot_plan_gear-removebg-preview.png";
import RoutineFingerPrint from "../HomePageAssets/routine_fingerprint-removebg-preview.png";
import ExpertArticlesBrain from "../HomePageAssets/expert_article_brain-removebg-preview.png";
import RecipeSoupBowl from "../HomePageAssets/healthy_recipes_soup_bowl-removebg-preview.png";
import WellnessVideosHeart from "../HomePageAssets/wellness_videos_heart-removebg-preview.png";
import CommunityChatBubble from "../HomePageAssets/community_chat-removebg-preview.png";
import CommunityBlogPencil from "../HomePageAssets/community_blog_pencil-removebg-preview.png";
import CommunityExclamation from "../HomePageAssets/community_whats_new_exclamation-removebg-preview.png";

import { BsFillCaretDownFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./Navbar_main.css";

const Navbar_main = () => {
  const [styleworkout, setStyle] = useState({ display: "none" });
  const [styleprograms, setStyleprograms] = useState({ display: "none" });
  const [styleAbout, setStyleAbout] = useState({ display: "none" });
  const [styleCommunity, setStyleCommunity] = useState({ display: "none" });
  const [styleHealthy_living, setStyleHealthy_living] = useState({
    display: "none",
  });
  return (
    <>
      <Flex color="white" h={"100px"} zIndex="1000">
        <Box bg="blue.500" w="74px">
          <Text>Box 2</Text>
        </Box>
        <Center w="174px" bg="rgb(255, 255, 255)">
          <Box>
            <Image src={MainLogo} alt="mainlogo" />
          </Box>
        </Center>
        <Box w="59.8%" justifyContent={"space-between"}>
          <div className="navbar_main_menu_items">
            <div
              className="navbar_main_menu_items_workout"
              onMouseEnter={(e) => {
                setStyle({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
              }}
            >
              <h4 className="navbar_main_menu_items_workout_text">WORKOUTS</h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_programs"
              onMouseEnter={(e) => {
                setStyleprograms({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleprograms({ display: "none" });
              }}
            >
              <h4 className="navbar_main_menu_items_programs_text">PROGRAMS</h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_healthy_living"
              onMouseEnter={(e) => {
                setStyleHealthy_living({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleHealthy_living({ display: "none" });
              }}
            >
              <h4 className="navbar_main_menu_items_healthy_living_text">
                HEALTHY LIVING
              </h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_community"
              onMouseEnter={(e) => {
                setStyleCommunity({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleCommunity({ display: "none" });
              }}
            >
              <h4 className="navbar_main_menu_items_community_text">
                COMMUNITY
              </h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_about"
              onMouseEnter={(e) => {
                setStyleAbout({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleAbout({ display: "none" });
              }}
            >
              <h4 className="navbar_main_menu_items_about_text">ABOUT</h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>

            <div className="navbar_main_menu_items_membership">
              <h4 className="navbar_main_menu_items_membership_text">
                MEMBERSHIP
              </h4>
            </div>
          </div>
        </Box>
        <Box flex="1.5">
          <div className="navbar_main_menu_items_signup">
            <h4 className="navbar_main_menu_items_hiSign_text">Hi! Sign In</h4>
            <div className="navbar_main_menu_items_myfitness_text_box">
              <h4 className="navbar_main_menu_items_myfitness_text">
                MY FITNESS
              </h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
          </div>
        </Box>
        <Box flex={"1"}>
          <div className="navbar_main_menu_items_right_most">
            <div className="navbar_main_menu_items_search">
              <BiSearchAlt2 color="black" size={"22px"} />
            </div>
            <div className="navbar_main_menu_items_shopping_bag">
              <MdOutlineShoppingBag color="black" size={"22px"} />
            </div>
          </div>
        </Box>
      </Flex>
      <div className="navbar_main_menu_blackbox-workout" style={styleworkout}>
      <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={LadyOnYogaMat} alt={LadyOnYogaMat} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4>WORKOUT VIDEOS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={WorkoutFingerPrint} alt={WorkoutFingerPrint} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4>CUSTOM WORKOUTS</h4>
          </div>
        </div>
      </div>
      {/* PROGRAMS*********************************** */}
      <div className="navbar_main_menu_blackbox-programs" style={styleprograms}>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={ProgramTickyes} alt={ProgramTickyes} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">WORKOUT PROGRAMS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={MealPlanApple} alt={MealPlanApple} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">MEAL PLANS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={PilotPlanGear} alt={PilotPlanGear} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">PILOT PROGRAMS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={RoutineFingerPrint} alt={RoutineFingerPrint} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4" >ROUTINES</h4>
          </div>
        </div>
      </div>
      {/* about********************* */}
      <div className="navbar_main_menu_blackbox-about" style={styleAbout}>
      <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={ExpertArticlesBrain} alt={ExpertArticlesBrain} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={ExpertArticlesBrain} alt={ExpertArticlesBrain} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={ExpertArticlesBrain} alt={ExpertArticlesBrain} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={ExpertArticlesBrain} alt={ExpertArticlesBrain} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
      </div>
      {/* healthy living *********************************/}
      <div
        className="navbar_main_menu_blackbox-healthy_living"
        style={styleHealthy_living}
      >
          <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={ExpertArticlesBrain} alt={ExpertArticlesBrain} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>  
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={RecipeSoupBowl} alt={RecipeSoupBowl} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">HEALTHY RECIPES</h4>
          </div>
        </div>  <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={WellnessVideosHeart} alt={WellnessVideosHeart} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">WELLNESS VIDEOS</h4>
          </div>
        </div>
      </div>

      {/* community */}
      <div
        className="navbar_main_menu_blackbox-community"
        style={styleCommunity}
      >
          <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={CommunityChatBubble} alt={CommunityChatBubble} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={CommunityBlogPencil} alt={CommunityBlogPencil} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image src={CommunityExclamation} alt={CommunityExclamation} />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Navbar_main;
