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



          <Box  display="flex"  justifyContent="center" gap={10}   >

            <Box w="150px" className='footer_logo' mt={10} >
                <Image w="100%"  src={footerImage} alt='logo' />
                <p>WORKOUT COMPLETE</p>
            </Box>


            <Box className='footer_section'>
                <Grid templateColumns='repeat(4, 1fr)' gap={5} textAlign="left" ml={5}>

                    <GridItem color="white"  >
                        <br/>
                        <Heading color="white" as="h4" size='xs' mt={7}>WORKOUTS</Heading>
                        <br />
                        <Text id="text" fontSize='sm' >WORKOUT VIDEOS</Text>
                        <br />
                        <Text id="text" fontSize='sm' >CUSTOM WORKOUTS</Text>
                        <br />
                        <Heading color="white" as="h4" size='xs'>PROGRAMS</Heading>
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
                        <Heading size='xs'>HEALTHY LIVING</Heading>
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

                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading size='sm'>ABOUT</Heading>
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
                        <Heading size='xs'>MEMBERSHIP</Heading>
                        <br />
                        <Text id="text">FB PLUS</Text>
                        <br />
                        <Text id="text">COMMUNITY</Text>
                        <br />
                        <Text id="text">CONTACT US</Text>
                        <br />
                        <Text id="text">FAQ</Text>
                        <br />
                        <Text id="text">STORE</Text>
                    </GridItem>

                </Grid>
                </Box>

           

            </Box>


            <br/>
            <br/>
            <br/>
            <br/>
            <hr />


            

            <Box display="flex" justifyContent="space-around" bg="#212432" h="15vh" >

                {/* <Box color="white" >
                    <br />
                    <Text fontSize='sm'>Select Language | </Text>
                </Box> */}
                <Box color="white">
                    <br />
                    <HStack gap={3}>

                        <Text fontSize='sm'>Copyright © 2022 Fitness Blender. All rights reserved. </Text>
                        <Text fontSize='sm'>Terms of Use</Text>
                        <Text fontSize='sm'> Privacy Policy</Text>
                      
                    </HStack>
                </Box>
                <Box color="white" display="flex" justifyContent="center" gap={5} p={8} >
                    <br />
                    <Text fontSize='xl'>  <BsYoutube /> </Text>
                    <Text fontSize='xl'>  <BsPinterest /> </Text>
                    <Text fontSize='xl'>  <AiFillFacebook /> </Text>
                    <Text fontSize='xl'>  <AiFillInstagram /> </Text>
                    <Text fontSize='xl'>  <AiFillTwitterCircle /> </Text>
                    
                </Box>
            </Box>

        </div>
    )
}

export default Footer