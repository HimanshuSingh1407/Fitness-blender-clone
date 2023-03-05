import {
  Box,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import WorkoutVideoComp from "../../Components/Workout/WorkoutVideoComp";
import axios from "axios";
import { useEffect } from "react";
const WorkoutVideos = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [page, setPage] = useState(1);
  let [allData, setAllData] = useState(null);
  
  let arr = new Array(Math.floor(allData/12)).fill(0);


  async function getVideoData(page) {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://fitness-center.onrender.com/workouts?limit=${12}&page=${page}`
      );
      let data = await res.data;

      setData(data.workout);
      setAllData(data.Total);
     

      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }

  useEffect(() => {
    getVideoData(page);
  }, [page]);

  if (loading) {
    return (
      <Text textAlign={"center"} pt={"100px"} fontSize={"20px"} margin={"auto"}>
        Loading...
      </Text>
    );
  } else if (error) {
    return (
      <Text textAlign={"center"} mt={"500px"} fontSize={"25px"} margin={"auto"}>
        Error...
      </Text>
    );
  } else
    return (
      <Box>
        <Container
          display={"flex"}
          alignItems="center"
          mt={"60px"}
          mb={"25px"}
          maxW={"80%"}
        >
          <Text fontSize={"40px"}>Workout Videos</Text>
          <Box ml={"5px"} mt={"12px"}>
            <IoIosInformationCircleOutline size={"25px"} />
          </Box>
        </Container>

        <Box bgColor={"#e3ebee"}>
          <Box
            pt={"40px"}
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
            {data.map((el) => {
              return (
                <WorkoutVideoComp
                  key={el._id}
                  detail4={el.detail_value}
                  image={el.lazyfade_src}
                  text1={el.content_title}
                  text4={el.sub_title}
                  text2={el.primary_detail}
                  detail3={el.detail_value_3}
                  detail5={el.detail_value_5}
                  detail2={el.detail_value_2}
                  detail6={el.detail_value_6}
                />
              );
            })}
          </Box>
        </Box>
        <Box
          pt={"20px"}
          pb={"20px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          {arr.map((el, i) => {
            return (
              <Button
                key={i}
                onClick={() => {
                  setPage(i + 1);
                }}
              >
                {i + 1}
              </Button>
            );
          })}
          <Button disabled={page===arr.length} onClick={() => setPage(page + 1)}>Next</Button>
        </Box>
      </Box>
    );
};

export default WorkoutVideos;
