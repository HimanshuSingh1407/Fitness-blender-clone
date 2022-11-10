import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  return (
    <>
      <Container maxW={'100%'} marginBottom='2em'>
        <Center>
          <Box p='3em' bgColor={"#e6f0f8"} w={'50%'} marginX='2em' marginY={'7em'}>
            <Stack marginTop={'3em'} >
              <Heading fontWeight={'400'} m='1' p={'1'}>Your Shopping Bag is Empty</Heading>
              <Text m='1' p={'1'}>
                Explore the site for programs, gifts, or FB Plus subscriptions.
              </Text>
            </Stack>
            <Grid templateColumns={'repeat(2, 1fr)'} gap={'3'} marginBottom='3em' marginTop={'2em'}>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                PROGRAMS
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                MEAL PLANS
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                FB PLUS
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                GIFT CARDS
              </Button>
            </Grid>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default Cart;
