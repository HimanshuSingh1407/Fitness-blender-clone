import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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
import AboutTutorialGradHat from "../HomePageAssets/about_tutorial_grad_hat-removebg-preview.png";
import AboutCareerSuitcase from "../HomePageAssets/about_careers_suicase_start-removebg-preview.png";
import AboutTeamCrowd from "../HomePageAssets/about_team_crowd-removebg-preview.png";
import AboutFavicon from "../HomePageAssets/favicon_logo.png";

import { BsFillCaretDownFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar_main.css";
import { json, Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar_main = () => {
 
  

  const [styleworkout, setStyle] = useState({ display: "none" });
  const [styleprograms, setStyleprograms] = useState({ display: "none" });
  const [styleAbout, setStyleAbout] = useState({ display: "none" });
  const [styleCommunity, setStyleCommunity] = useState({ display: "none" });
  const [styleHealthy_living, setStyleHealthy_living] = useState({
    display: "none",
  });
  const [styleSignUp, setStyleSignUp] = useState({ display: "none" });
  const [styleSeachBar, setStyleSeachBar] = useState({ display: "none" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  
  let data=JSON.parse(localStorage.getItem("auth"))||""
  
   


  return (
    <>
      <Flex color="white" h={"100px"} pos="sticky" top={"0px"} zIndex="27" >
        <Box bg="rgb(255 255 255)" w={["34px", "34px", "34px", "74px", "74px"]}>
          <Text>Box 2</Text>
        </Box>
        <Center w="174px" bg="rgb(255, 255, 255)">
          <Link to={"/"}>
            <Box>
              <Image src={MainLogo} alt="mainlogo" />
            </Box>
          </Link>
        </Center>
        <Box
          w="59.8%"
          justifyContent={"space-between"}
          display={["none", "none", "none", "flex", "flex"]}
        >
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
                  <Link to="/workout">
                <h4 className="navbar_main_menu_items_workout_text">
                  WORKOUTS
                </h4>
            </Link>
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
                  <Link to="/programs">
                <h4 className="navbar_main_menu_items_programs_text">
                  PROGRAMS
                </h4>
            </Link>
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

            <div className="navbar_main_menu_items_store">
              <Link to={"/store"}>
                <h4 className="navbar_main_menu_items_store_text">STORE</h4>
              </Link>
            </div>
            <div className="navbar_main_menu_items_membership">
              <Link to={"/membership"}>
                <h4 className="navbar_main_menu_items_membership_text">
                  MEMBERSHIP
                </h4>
              </Link>
            </div>
          </div>
        </Box>
        {/* small screen */}
        <Box display={["flex", "flex", "flex", "none", "none"]} pl="57%" bgColor="white"  >
          <div
            className="navbar_main_menu_items_respons_signup"
            onMouseEnter={(e) => {
              setStyleSignUp({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyleSignUp({ display: "none" });
            }}
          >
            <FaRegUserCircle
              color="rgb(33,36,50)"
              size={"25px"}
              fontWeight="100"
            />
            <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
          </div>

          <Button
            ref={btnRef}
            colorScheme="rgb(255 255 255)"
            alignSelf={"center"}
            onClick={onOpen}
          >
            <GiHamburgerMenu
              color="rgb(33,36,50)"
              size={"25px"}
              fontWeight="100"
            />
          </Button>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          bgColor=""
        >
          <DrawerOverlay />
          <DrawerCloseButton />
          <DrawerContent w={"100%"} bgColor="rgb(33,36,50)">
            <DrawerBody w={"100%"}>
              <Box
                display={"flex"}
                w="116%"
                mt="-7px"
                bgColor={"rgb(49,52,67)"}
                h="80px"
                ml="-22px"
              >
                <InputGroup w={"230px"} pl="15px">
                  <Input
                    variant="unstyled"
                    placeholder="KEYWORD SEARCH"
                    fontWeight={"600"}
                    w="95%"
                    h="70px"
                    color={"rgb(255 255 255)"}
                    fontSize="14px"
                    pl={"10px"}
                  />
                  <InputRightElement
                    children={
                      <BiSearchAlt2 color="rgb(255,255,255)" size={"22px"} />
                    }
                    mt="20px"
                  />
                </InputGroup>
                <Center height="100%">
                  <Divider orientation="vertical" />
                </Center>
                <Box pt="27px" pl="26px">
                  <Link to={"/cart"}>
                    <MdOutlineShoppingBag
                      color="rgb(255,255,255)"
                      size={"24px"}
                    />
                  </Link>
                </Box>
              </Box>
              <Link to={"/membership"}>
                <Text color="rgb(66, 150, 203)" pt="40px" pb="15px">
                  MEMBERSHIP
                </Text>
              </Link>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to={"/workout"}>
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  WORKOUTS
                </Text>
              </Link>
              <Link to="/workoutvideos" >

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                WORKOUT VIDEOS
              </Text>
              </Link>
              <Link to={"/customworkout"}>
                <Text
                  color="rgb(167,170,174)"
                  pt="10px"
                  pb="10px"
                  fontSize={"14px"}
                >
                  CUSTOM WORKOUTS
                </Text>
              </Link>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to="/programs">
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  PROGRAMS
                </Text>
              </Link>
              <Link to="/plans">

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                WORKOUT PROGRAMS
              </Text>
              </Link>
              <Link to="/meal">
                <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                  MEAL PLANS
                </Text>
              </Link>
              <Link to="/pilot">
                <Text
                  color="rgb(167,170,174)"
                  pt="10px"
                  pb="10px"
                  fontSize={"14px"}
                >
                  PILOT PLANS
                </Text>
              </Link>
              <Divider orientation="horizontal" w={"90%"} />
              <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                HEALTHY LIVING
              </Text>
              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                EXPERT ARTICLES
              </Text>
              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                HEALTHY RECIPES
              </Text>
              <Text
                color="rgb(167,170,174)"
                pt="10px"
                pb="10px"
                fontSize={"14px"}
              >
                WELLNESS VIDEOS
              </Text>
              <Divider orientation="horizontal" w={"90%"} />
              <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                COMMUNITY
              </Text>

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                BLOG
              </Text>
              <Text
                color="rgb(167,170,174)"
                pt="10px"
                pb="10px"
                fontSize={"14px"}
              >
                WHATS'S NEW
              </Text>
              <Divider orientation="horizontal" w={"90%"} />
              <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                ABOUT
              </Text>

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                CAREERS
              </Text>
              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                TUTORIALS
              </Text>
              <Text
                color="rgb(167,170,174)"
                pt="10px"
                pb="10px"
                fontSize={"14px"}
              >
                OUR TEAM
              </Text>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to={"/store"}>
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  STORE
                </Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box flex="1.5" display={["none", "none", "none", "flex", "flex"]} bgColor="white" >
          <div
            className="navbar_main_menu_items_signup"
            onMouseEnter={(e) => {
              setStyleSignUp({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyleSignUp({ display: "none" });
            }}
          >
            <h4 className="navbar_main_menu_items_hiSign_text">Hi! {
              data.fname && data!==""? data.fname : "Sign In"
            } </h4>
            <div className="navbar_main_menu_items_myfitness_text_box">
              <h4 className="navbar_main_menu_items_myfitness_text">
                MY FITNESS
              </h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
          </div>
        </Box>
        <Box flex={"1"} display={["none", "none", "none", "flex", "flex"]} bgColor="white" >
          <div className="navbar_main_menu_items_right_most">
            <div
              className="navbar_main_menu_items_search"
              onClick={(e) => {
                setStyleSeachBar({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleSeachBar({ display: "none" });
              }}
            >
              <BiSearchAlt2 color="black" size={"22px"} />
            </div>

            <div className="navbar_main_menu_items_shopping_bag">
              <Link to={"/cart"}>
                <MdOutlineShoppingBag color="black" size={"22px"} />
              </Link>
            </div>
          </div>
        </Box>
      </Flex>
      {/* BLACK BOX WORKOUT***************** */}
      <div
        className="navbar_main_menu_blackbox-workout"
        style={styleworkout}
        onMouseEnter={(e) => {
          setStyle({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <Link to={"/workoutvideos"}>
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              <Image
                src={LadyOnYogaMat}
                alt={LadyOnYogaMat}
                boxSize="50px"
                objectFit="cover"
              />
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">WORKOUT VIDEOS</h4>
            </div>
          </div>
        </Link>
        <Link to={"/customworkout"}>
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              <Image
                src={WorkoutFingerPrint}
                alt={WorkoutFingerPrint}
                boxSize="50px"
                objectFit="cover"
              />
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">CUSTOM WORKOUTS</h4>
            </div>
          </div>
        </Link>
      </div>
      {/* PROGRAMS*********************************** */}
     
      <div
        className="navbar_main_menu_blackbox-programs"
        style={styleprograms}
        onMouseEnter={(e) => {
          setStyleprograms({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleprograms({ display: "none" });
        }}
      >
         <Link to="/plans" >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={ProgramTickyes}
              alt={ProgramTickyes}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">WORKOUT PROGRAMS</h4>
          </div>
        </div>
        </Link>
<Link to="/meal" >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={MealPlanApple}
              alt={MealPlanApple}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">MEAL PLANS</h4>
          </div>
        </div>
        </Link>
        <Link to="/pilot" >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={PilotPlanGear}
              alt={PilotPlanGear}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">PILOT PROGRAMS</h4>
          </div>
        </div>
        </Link>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={RoutineFingerPrint}
              alt={RoutineFingerPrint}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">ROUTINES</h4>
          </div>
        </div>
      </div>
      
      {/* about********************* */}
      <div
        className="navbar_main_menu_blackbox-about"
        style={styleAbout}
        onMouseEnter={(e) => {
          setStyleAbout({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleAbout({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={AboutFavicon}
              alt={AboutFavicon}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">ABOUT</h4>
          </div>
        </div>

        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={AboutCareerSuitcase}
              alt={AboutCareerSuitcase}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">CAREERS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={AboutTutorialGradHat}
              alt={AboutTutorialGradHat}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">TUTORIALS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={AboutTeamCrowd}
              alt={AboutTeamCrowd}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">OUR TEAM</h4>
          </div>
        </div>
      </div>
      {/* healthy living *********************************/}
      <div
        className="navbar_main_menu_blackbox-healthy_living"
        style={styleHealthy_living}
        onMouseEnter={(e) => {
          setStyleHealthy_living({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleHealthy_living({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={ExpertArticlesBrain}
              alt={ExpertArticlesBrain}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={RecipeSoupBowl}
              alt={RecipeSoupBowl}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">HEALTHY RECIPES</h4>
          </div>
        </div>{" "}
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={WellnessVideosHeart}
              alt={WellnessVideosHeart}
              boxSize="50px"
              objectFit="cover"
            />
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
        onMouseEnter={(e) => {
          setStyleCommunity({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleCommunity({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={CommunityChatBubble}
              alt={CommunityChatBubble}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={CommunityBlogPencil}
              alt={CommunityBlogPencil}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            <Image
              src={CommunityExclamation}
              alt={CommunityExclamation}
              boxSize="50px"
              objectFit="cover"
            />
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
      </div>
      {/* membership */}
      <div
        className="navbar_main_menu_blackbox_signup"
        style={styleSignUp}
        onMouseEnter={(e) => {
          setStyleSignUp({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyleSignUp({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox_signup_items">
          <p className="navbar_main_menu_blackbox_text_h4">JOIN FOR FREE!</p>
        </div>
        <div className="navbar_main_menu_blackbox_signup_items">
          <p className="navbar_main_menu_blackbox_text_p">
            Join for free and start building and tracting your workouts, get
            support from other Fitness Blender members and more!
          </p>
        </div>
        <div className="navbar_main_menu_blackbox_signup_items_join_btn">
          <Link to="/membership">
            <Button
              w="100%"
              color={"rgb(255, 255, 255)"}
              bgColor={"rgb(66,150,203)"}
              mt="15px"
              fontSize={"16px"}
              letterSpacing="0.1px"
              h="45px"
              _hover={{
                bgGradient: "linear(to right,rgb(48,179,205), rgb(63,154,203))",
              }}
            >
              JOIN
            </Button>
          </Link>
        </div>
        <div className="navbar_main_menu_blackbox_signup_items_signin_btn">
          <Link to="/login">
            <Button
              w="100%"
              color={"rgb(255, 255, 255)"}
              bgColor={"rgb(49,52,67)"}
              border="1px"
              borderColor={"rgb(66,150,203)"}
              mt="15px"
              fontSize={"16px"}
              letterSpacing="0.1px"
              h="45px"
              _hover={{
                bgGradient:
                  "linear(to right, rgb(48,179,205), rgb(63,154,203))",
              }}
            >
              SIGN IN
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="navbar_main_menu_blackbox-community"
        style={styleSeachBar}
        onMouseEnter={(e) => {
          setStyleSeachBar({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          
          setStyleSeachBar({ display: "none" });
        }}
      >
        <InputGroup>
          <Input
            variant="flushed"
            placeholder="KEYWORD SEARCH"
            fontWeight={"600"}
            w="100%"
            h="70px"
            mt="20px"
            color={"rgb(255 255 255)"}
            fontSize="20px"
          />
          <InputRightElement
            children={<BiSearchAlt2 color="rgb(255 255 255)" size={"25px"} />}
            mt="35px"
          />
        </InputGroup>
      </div>
    </>
  );
};

export default Navbar_main;
