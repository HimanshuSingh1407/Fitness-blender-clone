import React from 'react'
import { Box, Grid, GridItem, Heading, HStack, Image, Text } from '@chakra-ui/react'
import {AiFillFacebook } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import {BsPinterest } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import  { AiFillTwitterCircle } from 'react-icons/ai';
import  footerImage from "./Footer_image/fitness_center_main_logo-no_bg.png"

import "./Footer.css"



const Footer = () => {
    return (
        <div className='footer_main_div' >
            <Box   w="170px" className='footer_logo' mt={10} display={["block","block","none","none","none"]}  >
                <Image mr={40} w="100%"  src={footerImage} alt='logo' />
                <p id='workout_complete'>WORKOUT COMPLETE</p>
            </Box>



          <Box  display="flex"  justifyContent="center" gap={5}   >

            <Box   w="170px" className='footer_logo' mt={10} display={["none","none","block","block","block"]}  >
                <Image mr={40} w="100%"  src={footerImage} alt='logo' />
                <p id='workout_complete'>WORKOUT COMPLETE</p>
            </Box>


            <Box className='footer_section' >
                <Grid templateColumns='repeat(4, 1fr)' gap={8} textAlign="center" className='maindiv' >

                    <GridItem color="white">
                        <br/>
                        <Heading id="footer_heading" color="white" as="h4" size='xs' mt={7}>WORKOUTS</Heading>
                        <br />
                        <Text id="text" fontSize='sm' >WORKOUT VIDEOS</Text>
                        <br />
                        <Text id="text" fontSize='sm' >CUSTOM WORKOUTS</Text>
                        <br />
                        <Heading id="footer_heading" color="white" as="h4" size='xs'>PROGRAMS</Heading>
                        <br />
                        <Text id="text" fontSize='sm' >WORKOUT PROGRAMS</Text>
                        <br />
                        <Text id="text" fontSize='sm' >MEAL PLANS</Text>
                        <br />
                        <Text id="text" fontSize='sm' >PILOT PROGRAMS</Text>
                        <br />
                        <Text id="text" fontSize='sm' >ROUTINES</Text>


                    </GridItem  >
                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading id="footer_heading" size='xs'>HEALTHY LIVING</Heading>
                        <br />
                        <Text id="text" fontSize='sm' >FITNESS</Text>
                        <br />
                        <Text id="text" fontSize='sm' >HEALTH</Text>
                        <br />
                        <Text id="text" fontSize='sm' >NUTRITION</Text>
                        <br />
                        <Text id="text" fontSize='sm' >HEALTHY RECIPES</Text>
                        <br />
                        <Text id="text" fontSize='sm' >EXPERTS</Text>

                    </GridItem >

                    <GridItem className='aboutArea' color="white" >
                        <br />
                        <br />
                        <Heading id="footer_heading" size='sm'>ABOUT</Heading>
                        <br />
                        <Text id="text" fontSize='sm' >B2B OPTIONS</Text>
                        <br />

                        <Text id="text" fontSize='sm' >TUTORIALS</Text>
                        <br />

                        <Text id="text" fontSize='sm' >OUR TEAM</Text>
                        <br />
                        <Text id="text" fontSize='sm' >B2B OPTIONS</Text>

                    </GridItem>
                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading id="footer_heading" size='xs'>MEMBERSHIP</Heading>
                        <br />
                        <Text id="text1">FB PLUS</Text>
                        <br />
                        <Text id="text1">COMMUNITY</Text>
                        <br />
                        <Text id="text1">CONTACT US</Text>
                        <br />
                        <Text id="text1">FAQ</Text>
                        <br />
                        <Text id="text1">STORE</Text>
                    </GridItem>

                </Grid>
                </Box>

           

            </Box>


            <br/>
            <br/>
            <br/>
            <br/>
            <hr id='hr_tag' />


            

            <Box display="flex" justifyContent="space-around" bg="#212432" h="15vh" >

                {/* <Box color="white" >
                    <br />
                    <Text fontSize='sm'>Select Language | </Text>
                </Box> */}
                <Box color="white">
                    <br />
                    <HStack gap={3}>

                        <Text className='Copyright' fontSize='sm'>Copyright © 2022 Fitness Blender. All rights reserved. </Text>
                        <Text className='term_policy' fontSize='sm'>Terms of Use</Text>
                        <Text className='term_policy' fontSize='sm'> Privacy Policy</Text>
                      
                    </HStack>
                </Box>
                <Box color="white" display="flex" justifyContent="center" gap={5} p={8} >
                    <br />
                    <Text className='socal_icon' fontSize='xl'>  <BsYoutube /> </Text>
                    <Text className='socal_icon' fontSize='xl'>  <BsPinterest /> </Text>
                    <Text className='socal_icon' fontSize='xl'>  <AiFillFacebook /> </Text>
                    <Text className='socal_icon' fontSize='xl'>  <AiFillInstagram /> </Text>
                    <Text className='socal_icon' fontSize='xl'>  <AiFillTwitterCircle /> </Text>
                    
                </Box>
            </Box>

        </div>
    )
}

export default Footer