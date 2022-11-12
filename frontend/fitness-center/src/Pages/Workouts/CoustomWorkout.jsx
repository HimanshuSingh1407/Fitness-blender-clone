import { AspectRatio, Box, Button, Hide, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const CoustomWorkout = () => {
  useEffect(() => {
    document.title="Workout Page"
  }, [])
  
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
            <Text
              w={{ base: "300px", md: "400px", lg: "500px", xl: "500px" }}
              color={"white"}
              fontSize={"45px"}
            >
              Custom Workouts
            </Text>
            <Text
              mt={"-20px"}
              w={{ base: "300px", sm: "250px", md: "350px" }}
              fontSize={"50px"}
              color={"white"}
            >
              FB Plus
              <Button
                ml={"5px"}
                fontWeight="bold"
                fontSize={"15px"}
                w="130px"
                h={"30px"}
                color={"white"}
                bgColor={"#3cdbb8"}
              >
                ALL ACCESS
              </Button>
            </Text>
            <Button
              fontSize={"16px"}
              _hover={{ border: "2px solid skyblue" }}
              h={"60px"}
              w={{ base: "200px", sm: "250px", md: "250px" }}
              color={"white"}
              pt="10px"
              pb={"10px"}
              background="transparent"
              border="1px solid white"
            >
              Join All Access Now
            </Button>
          </Box>
          <Image
            h={"600px"}
            src="https://cloudfront.fitnessblender.com/assets/img/fbplus/fingerprint.jpg"
            w={{ base: "1000px", md: "1000px", lg: "1200px", xl: "1600px" }}
            alt="Screenshot-2022-11-09-123312"
            border="0"
          />
        </Box>
      </Hide>
      <Hide above="md">
        <Box>
          <Image
            h={{ base: "250px", sm: "400px", md: "400px", lg: "500px" }}
            w={{ base: "500px", sm: "700px", md: "1000px", lg: "1000px" }}
            src="https://cloudfront.fitnessblender.com/assets/img/fbplus/fingerprint-xs@2X.jpg"
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
          w={{ base: "460px", sm: "700px", md: "800px", lg: "1000px" }}
        >
          <Text fontSize={"30px"} color={"white"}>
            Custom Workouts
          </Text>
          <Text
            mt={"-25px"}
            w={{ base: "200px", sm: "250px", md: "250px" }}
            fontSize={"30px"}
            color={"white"}
          >
            FB Plus
            <Button
              ml={"5px"}
              fontSize={"8px"}
              w="70px"
              h={"20px"}
              color={"white"}
              bgColor={"#3cdbb8"}
            >
              ALL ACCESS
            </Button>
          </Text>
          <Button
            fontSize={"16px"}
            _hover={{ border: "2px solid skyblue" }}
            h={"60px"}
            w={{ base: "200px", sm: "250px", md: "250px" }}
            color={"white"}
            pt="10px"
            pb={"10px"}
            border="1px solid white"
            bgColor={"#212432"}
          >
            Join All Access Now
          </Button>
        </Box>
      </Hide>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            margin={"auto"}
            w={{ base: "1000px", md: "1000px", lg: "1200px", xl: "1000px" }}
            src="https://cloudfront.fitnessblender.com/assets/img/fbplus/custom-card-list.jpg"
          ></Image>
        </Box>
        <Box
          mt={"150px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box mt={"-140px"}>
            <Text
              mb={"40px"}
              textAlign={"start"}
              w={{ base: "350px", sm: "350px", md: "450px" }}
              fontSize={{ base: "22px", md: "=20px", lg: "30px", xl: "30px" }}
            >
              Add Your Own Workouts to Fitness Blender
            </Text>
            <Text
              fontSize={{ base: "12px", md: "=20px", lg: "16px" }}
              textAlign={"start"}
              w={{ base: "400px", sm: "350px", md: "480px" }}
            >
              Whether you want to track your evening walk or earn your workout
              complete with your favorite videos from outside Fitness Blender,
              you can now add custom workouts to your FB Plus account.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        ml={"80px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text
            mb={"40px"}
            textAlign={"start"}
            w={{ base: "200px", sm: "250px", md: "450px" }}
            fontSize={{ base: "20px", md: "=20px", lg: "30px", xl: "30px" }}
          >
            Add, Schedule, and Track
          </Text>
          <Text
            textAlign={"start"}
            w={{ base: "200px", sm: "250px", md: "480px" }}
          >
            Create a custom workout with detailed information just like a
            Fitness Blender workout. You can then add it to your calendar, earn
            your workout complete, and track its stats on the FB dashboard.
          </Text>
        </Box>
        <Box>
          <Image
            w={{ base: "1000px", md: "1000px", lg: "700px" }}
            src="https://cloudfront.fitnessblender.com/assets/img/fbplus/custom-calendar.jpg"
          ></Image>
        </Box>
      </Box>
      <Box bgColor={"#e3ebee"} pt={"70px"} pb={"80px"}>
        <AspectRatio m={"auto"} maxW="900px" ratio={4 / 2}>
          <iframe
            width={"80%"}
            title="Workout"
            src="https://www.youtube.com/embed/Fm4Tey-1Xxc"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default CoustomWorkout;
{
  /* <iframe width="415" height="864" src="" title="New: Add Independent Workouts & Third Party Workout Videos to FB Calendar - FB Plus Feature" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
