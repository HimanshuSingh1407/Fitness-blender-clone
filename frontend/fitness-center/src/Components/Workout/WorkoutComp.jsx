import React from 'react'
import { Box, Image,Text } from '@chakra-ui/react';
import {BsCalendar,BsThreeDotsVertical} from "react-icons/bs"
const WorkoutComp = ({image,text1,text2}) => {
  return (
    <Box m={"auto"} w={{base:"500px",md:"400px",lg:"300px",xl:"300px"}}>
        <Image w={{base:"500px",md:"400px",lg:"300px",xl:"300px"}} src={`${image}`}></Image>
        <Box h={"150px"} backgroundColor={"white"} justifyContent={"space-between"} display={"flex"}>
        <Box>
           <Box ml="12px" w={"220px"} textAlign={"start"} >
            <Text>{text1}</Text>
            <Text fontSize={"12px"} color={"blue"} fontWeight={"light"}>{text2}</Text>
           </Box>
        </Box>
          <Box mt={"6px"} mr="12px">
            <BsCalendar/>
            <Box mt={"10px"}>
              <BsThreeDotsVertical/>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default WorkoutComp