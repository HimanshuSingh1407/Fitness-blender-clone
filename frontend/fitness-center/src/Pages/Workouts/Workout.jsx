import React from 'react';
import {Box,Container,Image} from '@chakra-ui/react'
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import WorkoutComp from '../../Components/Workout/WorkoutComp';

const Workout = () => {
  const [workoutData,setWorkoutData]=useState([])
  const [plusData,setPlusData]=useState([])
  const [beginnerData,setBeginnerData]=useState([])
  const [HILTrData,setHILTData]=useState([])
  const [strengthData,setStrengthData]=useState([])
  
   async function getWorkoutData (){
     let res=await axios.get(`http://localhost:8080/freeWorkoutData`)
     let data=await res.data;
      setWorkoutData(data)
     }

     async function getPlusWorkoutData (){
      let res=await axios.get(`http://localhost:8080/plusWorkoutData`)
      let data=await res.data;
      setPlusData(data)
      }

      async function getBeginnerWorkoutData (){
        let res=await axios.get(`http://localhost:8080/BeginnerWorkoutData`)
        let data=await res.data;
        setBeginnerData(data)
        }

        
      async function getHILTWorkoutData (){
        let res=await axios.get(`http://localhost:8080/HIITWorkoutsData`)
        let data=await res.data;
        setHILTData(data)
        }

        async function getHILTWorkoutData (){
          let res=await axios.get(`http://localhost:8080/HIITWorkoutsData`)
          let data=await res.data;
          setHILTData(data)
          }

          async function getstrengthWorkoutData (){
            let res=await axios.get(`http://localhost:8080/strengthWorkoutsData`)
            let data=await res.data;
            setStrengthData(data)
            }
  

     useEffect(()=>{
         getWorkoutData()
         getPlusWorkoutData()
         getBeginnerWorkoutData()
         getHILTWorkoutData()
         getstrengthWorkoutData()
     },[])
      


  return (
    <Box fontFamily={"Helvetica"}>
         <Box>
         <Image h={"600px"} src="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts.jpg" w={{base:"1000px",md:"1000px",lg:"1200px",xl:"1500px"}} alt="Screenshot-2022-11-09-123312" border="0"/>
         </Box>
         
      <Box bgColor={"#e3ebee"}>
          <Box pb={"90px"} pt={"90px"}>
            <Box margin={"auto"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}}  display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box fontSize={{base:"20px",md:"32px",lg:"40px"}}>Newest Free Workout Videos</Box>
            <Box color={"#4296cb"}>View All Free Workouts</Box>
          </Box>
          <Box pt={"50px"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} gap={{base:"5px",md:"5px",lg:"5px",xl:"5px"}} margin={"auto"} display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}}>
          {
            workoutData.map((el)=>{
              return <WorkoutComp image={el.image} text1={el.text1} text2={el.text2}/> 
            })
          }
          </Box>
       </Box>
      </Box>

      
      <Box bgColor={"#f0f4f6"}>
          <Box pb={"90px"} pt={"90px"}>
            <Box margin={"auto"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box fontSize={{base:"20px",md:"32px",lg:"40px"}}>Newest Plus Workout Videos</Box>
            <Box color={"#4296cb"}>View All Plus Workouts</Box>
          </Box>
          <Box pt={"50px"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} gap={{base:"5px",md:"5px",lg:"5px",xl:"5px"}} margin={"auto"} display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}}>
          {
            plusData.map((el)=>{
              return <WorkoutComp image={el.image} text1={el.text1} text2={el.text2}/> 
            })
          }
          </Box>
       </Box>
      </Box>

      <Box bgColor={"#e3ebee"}>
          <Box pb={"90px"} pt={"90px"}>
            <Box margin={"auto"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box fontSize={{base:"20px",md:"32px",lg:"40px"}}>Beginner Workouts</Box>
            <Box color={"#4296cb"}>View All Beginner Workouts</Box>
          </Box>
          <Box pt={"50px"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} gap={{base:"5px",md:"5px",lg:"5px",xl:"5px"}} margin={"auto"} display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}}>
          {
            beginnerData.map((el)=>{
              return <WorkoutComp image={el.image} text1={el.text1} text2={el.text2}/> 
            })
          }
          </Box>
       </Box>
      </Box>
  
      <Box bgColor={"#f0f4f6"}>
          <Box pb={"90px"} pt={"90px"}>
            <Box margin={"auto"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box fontSize={{base:"20px",md:"32px",lg:"40px"}}>HIIT Workouts</Box>
            <Box color={"#4296cb"}>View All HIIT Workouts</Box>
          </Box>
          <Box pt={"50px"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} gap={{base:"5px",md:"5px",lg:"5px",xl:"5px"}} margin={"auto"} display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}}>
          {
            HILTrData.map((el)=>{
              return <WorkoutComp image={el.image} text1={el.text1} text2={el.text2}/> 
            })
          }
          </Box>
       </Box>
      </Box>
      
      <Box bgColor={"#e3ebee"}>
          <Box pb={"90px"} pt={"90px"}>
            <Box margin={"auto"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box fontSize={{base:"20px",md:"32px",lg:"40px"}}>Strength Workouts</Box>
            <Box color={"#4296cb"}>View All Strength Workouts</Box>
          </Box>
          <Box pt={"50px"} w={{base:"500px",md:"800px",lg:"900px",xl:"1250px"}} gap={{base:"5px",md:"5px",lg:"5px",xl:"5px"}} margin={"auto"} display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}}>
          {
            strengthData.map((el)=>{
              return <WorkoutComp image={el.image} text1={el.text1} text2={el.text2}/> 
            })
          }
          </Box>
       </Box>
      </Box>

    </Box>
  )
}

export default Workout