import React from 'react'
import { Box, Image,List,Text, UnorderedList } from '@chakra-ui/react';
import {BsCalendar,BsThreeDotsVertical} from "react-icons/bs";
import "./work.css";

const WorkoutVideoComp = ({image,text1,text2,text4,detail2,detail3,detail4,detail5,detail6}) => {

  return (
       
      <Box className="card">
<Box  className="card__content" margin={"auto"} w={{base:"500px",md:"400px",lg:"300px",xl:"300px"}}>
        <Image w={{base:"400px",md:"400px",lg:"300px",xl:"300px"}} src={`${image}`}></Image>
        <Box h={"150px"} backgroundColor={"white"} justifyContent={"space-between"} fontSize={{base:"16px",md:"12px",lg:"14px",xl:"14px"}}  display={"flex"}>
        <Box mt={"40px"}>
           <Box ml="12px" w={"200px"} textAlign={"start"} >
            <Text>{text1}</Text>
            <Text>{text4}</Text>
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
        <UnorderedList mt={{base:"20",md:"30",lg:"60px",xl:"60px"}} fontSize={"16px"} className="content__hidden">
							<List>
								<Text >Burn Estimate:{detail3}</Text>
							</List>
							<List>
								<Text >Traning Type : {detail4}</Text>
								<Text >Likes : {detail6}</Text>
							</List>
							<List>
								<Text >Comments : {detail5}</Text>
								<Text >Equipments : {detail2}</Text>
							</List>
						</UnorderedList>
    </Box>
      </Box>

         


    
  )
}

export default WorkoutVideoComp