import React from "react";
import { Box, Text, Image, Hide, Show } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import WorkoutComp from "../../Components/Workout/WorkoutComp";

const Workout = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [plusData, setPlusData] = useState([]);
  const [beginnerData, setBeginnerData] = useState([]);
  const [HILTrData, setHILTData] = useState([]);
  const [strengthData, setStrengthData] = useState([]);

  async function getWorkoutData() {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/workouts?limit=4`
    );
    let data = await res.data;
    setWorkoutData(data);
  }

  async function getPlusWorkoutData() {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/workouts?limit=4&page=2`
    );
    let data = await res.data;
    setPlusData(data);
  }

  async function getBeginnerWorkoutData() {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/workouts?limit=4&page=3`
    );
    let data = await res.data;
    setBeginnerData(data);
  }

  async function getHILTWorkoutData() {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/workouts?limit=4&page=4`
    );
    let data = await res.data;
    setHILTData(data);
  }

  async function getstrengthWorkoutData() {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/workouts?limit=4&page=5`
    );
    let data = await res.data;
    setStrengthData(data);
  }

  useEffect(() => {
    getWorkoutData();
    getPlusWorkoutData();
    getBeginnerWorkoutData();
    getHILTWorkoutData();
    getstrengthWorkoutData();
  }, []);

  return (
    <Box fontFamily={"Helvetica"}>
      <Hide below="md">
        <Box>
          <Box
            ml={{ base: "20px", md: "=20px", lg: "150px", xl: "150px" }}
            mt={"200px"}
            textAlign={"start"}
            w={"700px"}
            zIndex={1}
            position={"absolute"}
          >
            <Text color={"#4296cb"}>ONLINE WORKOUT VIDEOS</Text>
            <Text
              w={{ base: "300px", md: "400px", lg: "500px", xl: "500px" }}
              color={"white"}
              fontSize={"45px"}
            >
              Find Your Fitness. Something for Everyone.
            </Text>
            <Text
              w={{ base: "300px", md: "400px", lg: "500px", xl: "500px" }}
              color={"white"}
              fontSize={"16px"}
            >
              A huge selection of workout videos and programs to help you look
              and feel your best.
            </Text>
          </Box>
          <Image
            h={"600px"}
            src="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts.jpg"
            w={{ sm: "800px", md: "1000px", lg: "1200px", xl: "1600px" }}
            alt="Screenshot-2022-11-09-123312"
            border="0"
          />
        </Box>
      </Hide>
      <Show below="md">
        <Box>
          <Image
            h={{ base: "250px", sm: "400px", md: "400px", lg: "500px" }}
            w={'100%'}
            src="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts-xs.jpg"
            alt="Screenshot-2022-11-09-123312"
            border="0"
          />
        </Box>
        <Box
          display={"grid"}
          justifyContent={"center"}
          m={"auto"}
          h={"200px"}
          pt={"20px"}
          fontSize={"11px"}
          bgColor={"#212432"}
          w={{ base: "450px", sm: "700px", md: "900px" }}
        >
          <Text color={"#4296cb"}>ONLINE WORKOUT VIDEOS</Text>
          <Text w={"300px"} fontSize={"23px"} color={"white"}>
            Find Your Fitness. Something for Everyone.
          </Text>
          <Text w={"300px"} color={"white"}>
            A huge selection of workout videos and programs to help you look and
            feel your best.
          </Text>
        </Box>
      </Show>

      <Box bgColor={"#e3ebee"}>
        <Box pb={"90px"} pt={"90px"}>
          <Box
            margin={"auto"}
            w={{ base: "400px", md: "800px", lg: "900px", xl: "1250px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box fontSize={{ base: "18px", md: "32px", lg: "40px" }}>
              Newest Free Workout Videos
            </Box>
            <Box color={"#4296cb"}>View All Free Workouts</Box>
          </Box>
          <Box
            pt={"50px"}
            w={{ base: "500px", md: "800px", lg: "900px", xl: "1250px" }}
            gap={{ base: "5px", md: "5px", lg: "5px", xl: "5px" }}
            margin={"auto"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
          >
            {workoutData.map((el) => {
              return (
                <WorkoutComp
                  key={el._id}
                  image={el.lazyfade_src}
                  text1={el.content_title}
                  text2={el.primary_detail}
                  text3={el.sub_title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box bgColor={"#f0f4f6"}>
        <Box pb={"90px"} pt={"90px"}>
          <Box
            margin={"auto"}
            w={{ base: "400px", md: "800px", lg: "900px", xl: "1250px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box fontSize={{ base: "18px", md: "32px", lg: "40px" }}>
              Newest Plus Workout Videos
            </Box>
            <Box color={"#4296cb"}>View All Plus Workouts</Box>
          </Box>
          <Box
            pt={"50px"}
            w={{ base: "500px", md: "800px", lg: "900px", xl: "1250px" }}
            gap={{ base: "5px", md: "5px", lg: "5px", xl: "5px" }}
            margin={"auto"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
          >
            {plusData.map((el) => {
              return (
                <WorkoutComp
                  key={el._id}
                  image={el.lazyfade_src}
                  text1={el.content_title}
                  text2={el.primary_detail}
                  text3={el.sub_title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box bgColor={"#e3ebee"}>
        <Box pb={"90px"} pt={"90px"}>
          <Box
            margin={"auto"}
            w={{ base: "400px", md: "800px", lg: "900px", xl: "1250px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box fontSize={{ base: "18px", md: "32px", lg: "40px" }}>
              Beginner Workouts
            </Box>
            <Box color={"#4296cb"}>View All Beginner Workouts</Box>
          </Box>
          <Box
            pt={"50px"}
            w={{ base: "500px", md: "800px", lg: "900px", xl: "1250px" }}
            gap={{ base: "5px", md: "5px", lg: "5px", xl: "5px" }}
            margin={"auto"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
          >
            {beginnerData.map((el) => {
              return (
                <WorkoutComp
                  key={el._id}
                  image={el.lazyfade_src}
                  text1={el.content_title}
                  text2={el.primary_detail}
                  text3={el.sub_title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box bgColor={"#f0f4f6"}>
        <Box pb={"90px"} pt={"90px"}>
          <Box
            margin={"auto"}
            w={{ base: "400px", md: "800px", lg: "900px", xl: "1250px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box fontSize={{ base: "18px", md: "32px", lg: "40px" }}>
              HIIT Workouts
            </Box>
            <Box color={"#4296cb"}>View All HIIT Workouts</Box>
          </Box>
          <Box
            pt={"50px"}
            w={{ base: "500px", md: "800px", lg: "900px", xl: "1250px" }}
            gap={{ base: "5px", md: "5px", lg: "5px", xl: "5px" }}
            margin={"auto"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
          >
            {HILTrData.map((el) => {
              return (
                <WorkoutComp
                  key={el._id}
                  image={el.lazyfade_src}
                  text1={el.content_title}
                  text2={el.primary_detail}
                  text3={el.sub_title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box bgColor={"#e3ebee"}>
        <Box pb={"90px"} pt={"90px"}>
          <Box
            margin={"auto"}
            w={{ base: "400px", md: "800px", lg: "900px", xl: "1250px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box fontSize={{ base: "18px", md: "32px", lg: "40px" }}>
              Strength Workouts
            </Box>
            <Box color={"#4296cb"}>View All Strength Workouts</Box>
          </Box>
          <Box
            pt={"50px"}
            w={{ base: "500px", md: "800px", lg: "900px", xl: "1250px" }}
            gap={{ base: "5px", md: "5px", lg: "5px", xl: "5px" }}
            margin={"auto"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
          >
            {strengthData.map((el) => {
              return (
                <WorkoutComp
                  key={el._id}
                  image={el.lazyfade_src}
                  text1={el.content_title}
                  text2={el.primary_detail}
                  text3={el.sub_title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Workout;
