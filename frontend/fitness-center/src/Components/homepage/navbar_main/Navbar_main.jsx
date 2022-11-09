import React from 'react'
import { Box, Center, Flex, Image, Square, Text } from '@chakra-ui/react'
import MainLogo from "../HomePageAssets/fitness_center_main_logo-no_bg.png"

const Navbar_main = () => {
  return (
    <Flex color='white'>
    <Box bg='blue.500' w='74px'>
      <Text>Box 2</Text>
    </Box>
    <Center w='150px' bg='green.500'>
      <Box>
        <Image src={MainLogo} alt="mainlogo" />
      </Box>
    </Center>
    <Square bg='blue.500' size='100px'>
      <Text>Box 2</Text>
    </Square>
    <Box flex='1' bg='tomato'>
      <Text>Box 3</Text>
    </Box>
  </Flex>
  )
}

export default Navbar_main