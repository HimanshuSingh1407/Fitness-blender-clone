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
import { BiShoppingBag } from "react-icons/bi";

const Gift = ({ image, price, fun }) => {
  return (
    <>
      <Box
        borderRadius={"5px"}
        minWidth="250px"
        bgColor={"white"}
        paddingBottom={"1"}
      >
        <img src={image} alt="image" />
        <Flex justifyContent={"space-between"} p="2" paddingEnd={"2"} marginTop='3'>
          <Text textAlign={"left"} fontWeight="500" p={"2"}>
            {`$${price}`}
          </Text>

          <Button
            leftIcon={<Icon as={BiShoppingBag} fontSize="lg" />}
            color="white"
            bg={"blue.500"}
            fontSize="xs"
            _hover='none'
            onClick={()=>fun({image, price})}
          >
            ADD TO BAG
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Gift;
