import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EgiftForm from "../../Components/store/EgiftForm";
import { deleteCartItem, getCartArrayData } from "../../api/cartSlice";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";

const Cart = () => {
  const { cart } = useSelector((state) => state);
   const navigate=useNavigate();
  const dispatch = useDispatch();
  const {isAuth}=useContext(AuthContext)

  useEffect(() => {
    dispatch(getCartArrayData());
  }, []);


  function handleClick(){
          if(isAuth){
            navigate("/billing")
          }else{
            navigate("/login")
          }
  }

  return (
    <>
      <Container maxW={"100%"} marginBottom="2em" p={"0"}>
        <Center m="0" p="0">
          {cart.cart.length ? (
            <Container maxW={"100%"} m="0" p={"0"}>
              <Box
                maxW={"80%"}
                textAlign="left"
                marginX={"auto"}
                paddingY="3.5em"
              >
                <Heading fontSize={"3em"} fontWeight="400">
                  Shopping Bag
                </Heading>
              </Box>
              <Box bgColor={"gray.100"} w="100%" paddingY="3.5em">
                <TableContainer w={"80%"} marginX="auto" bgColor={"white"}>
                  <Table variant="simple">
                    <Thead borderBottom={"2px solid lightgrey"}>
                      <Tr>
                        <Th>ITEM</Th>
                        <Th>REMOVE</Th>
                        <Th>PRICE</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {cart.cart.map((el, ind) => (
                        <Tr borderBottom="1px solid lightgrey" key={ind + 1}>
                          <Td>
                            <Flex alignItems={"flex-start"}>
                              <HStack w={"130px"}>
                                <img
                                  src={el.image}
                                  alt="passes"
                                  width={"100%"}
                                />
                              </HStack>
                              {el.para !== undefined ? (
                                <Stack p="2">
                                  <Text>{el.para.toUpperCase()}</Text>
                                  <Text
                                    textTransform={"capitalize"}
                                    fontWeight="600"
                                  >
                                    {`${el.day}-Day Pass`}
                                  </Text>
                                </Stack>
                              ) : (
                                <Stack p="2" w={"350px"}>
                                  <Text>GIFT CARD</Text>
                                  <Text
                                    fontWeight={"600"}
                                  >{`$${el.price} eGift Card`}</Text>
                                  <EgiftForm />
                                </Stack>
                              )}
                            </Flex>
                          </Td>
                          <Td>
                            <CloseIcon
                              cursor={"pointer"}
                              onClick={() => dispatch(deleteCartItem(ind))}
                            />
                          </Td>
                          <Td fontWeight="600">{`$${el.price.toFixed(2)}`}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th
                          fontSize={"1.5em"}
                          fontFamily="heading"
                          color={"black"}
                          p="1.2em"
                        >
                          Order Total:
                        </Th>
                        <Th></Th>
                        <Th
                          fontSize={"1.5em"}
                          fontFamily="heading"
                          color={"black"}
                        >{`$${cart.totalSum.toFixed(2)}`}</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  w="80%"
                  m={"auto"}
                  pt="15px"
                  pb={"20px"}
                  bgColor="white"
                  px={"20px"}
                  h="7em"
                  borderTop={"2px solid lightgrey"}
                >
                  <Button
                    variant={"outline"}
                    colorScheme="blue"
                    _hover={{
                      backgroundColor: "rgb(66,150,203)",
                      color: "white",
                    }}
                    fontSize="13px"
                    fontWeight={"600"}
                    px="2em"
                  >
                    <Link to="/store">CONTINUE SHOPPING</Link>
                  </Button>
                  <Button
                    onClick={handleClick}
                    paddingX={"3rem"}
                    paddingY="2em"
                    bgColor="blue.500"
                    fontSize={"16px"}
                    fontWeight="600"
                    color={"white"}
                    _hover={{
                      bgGradient:
                        "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                    }}
                  >
                      PROCEED TO CHECKOUT
                  </Button>
                </Box>
              </Box>
            </Container>
          ) : (
            <Box
              p="3em"
              bgColor={"#e6f0f8"}
              w={"50%"}
              marginX="2em"
              marginY={"7em"}
            >
              <Stack marginTop={"3em"} textAlign="center" >
                <Heading  fontWeight={"400"} m="1" p={"1"}>
                  Your Shopping Bag is Empty
                </Heading>
                <Text m="1" p={"1"}>
                  Explore the site for programs, gifts, or FB Plus
                  subscriptions.
                </Text>
              </Stack>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={"3"}
                marginBottom="3em"
                marginTop={"2em"}
              >
                <Button
                  paddingX={"5rem"}
                  bgColor="blue.500"
                  fontSize={"xs"}
                  fontWeight="600"
                  color={"white"}
                  _hover={{
                    bgGradient:
                      "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                  }}
                >
                  <Link to="/plans">PROGRAMS</Link>
                </Button>
                <Button
                  paddingX={"5rem"}
                  bgColor="blue.500"
                  fontSize={"xs"}
                  fontWeight="600"
                  color={"white"}
                  _hover={{
                    bgGradient:
                      "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                  }}
                >
                  <Link to="/meal">MEAL PLANS</Link>
                </Button>
                <Button
                  paddingX={"5rem"}
                  bgColor="blue.500"
                  fontSize={"xs"}
                  fontWeight="600"
                  color={"white"}
                  _hover={{
                    bgGradient:
                      "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                  }}
                >
                  <Link to="/membership">FB PLUS</Link>
                </Button>
                <Button
                  paddingX={"5rem"}
                  bgColor="blue.500"
                  fontSize={"xs"}
                  fontWeight="600"
                  color={"white"}
                  _hover={{
                    bgGradient:
                      "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                  }}
                >
                  <Link to="/store">GIFT CARDS</Link>
                </Button>
              </Grid>
            </Box>
          )}
        </Center>
      </Container>
    </>
  );
};

export default Cart;
