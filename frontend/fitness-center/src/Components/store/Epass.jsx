import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiShoppingBag } from 'react-icons/bi'



const Epass = ({ image, day, para, price }) => {
  return (
    <>
      <Box borderRadius={"5px"} minWidth="250px" bgColor={'white'} paddingBottom={'2'} >
        <img src={image} alt="image" />
        <Flex justifyContent={"space-between"} p="1" paddingEnd={'2'}>
          <Stack>
            <Box textAlign={"left"} p="2">
              <Text fontSize="xs">{para.toUpperCase()}</Text>
              <Text fontWeight="600">{day}</Text>
            </Box>
            <Spacer />
            <Text textAlign={"left"} fontWeight="500" p={"2"}>
              {price}
            </Text>
          </Stack>
          <Stack flexDirection={'column-reverse'}>
            <Button leftIcon={<Icon as={BiShoppingBag} fontSize='lg'/>} color='white' bg={'blue.500'} fontSize='xs'>
                ADD TO BAG
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Epass;
