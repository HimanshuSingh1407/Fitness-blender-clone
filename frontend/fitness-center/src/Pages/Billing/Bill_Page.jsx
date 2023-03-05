import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  Spacer,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState ,useContext} from "react";
import "./Bill.css";
import { GoChevronLeft } from "react-icons/go";
import {  Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../AuthContext/AuthContext";

const Bill_Page = () => {

  const cartData = JSON.parse(localStorage.getItem("cartArray")) || [];
  const [sum, setSum] = useState(0);
  const navigate=useNavigate()



  const orderTotal = () => {
    let value = 0;
    cartData.forEach((el, index) => {
      return (value += Number(el.price));
    });
    setSum(value);
  };

  useEffect(() => {
    document.title = "Check Out Page";
    orderTotal();
  }, []);

 function handleSubmit(e){
  e.preventDefault()
     navigate("/checkout")
 }

  return (
    <div className="utter_div"  >

    <Box bgColor={'white'} h='150px' borderTop={'1px solid lightgrey'}>
    <Text fontSize={'45px'} margin='1em' >
      Checkout
    </Text>
  </Box>
      <Box className="total_order">
        <Box
          h="50px"
          bg="#fafcfd"
          w="100%"
          p={1}
          color="black"
          boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
        >
          <Flex>
            <Box px="20px " pt="10px">
              <Text
                fontFamily="Maison Neue"
                fontSize="19px"
                lineHeight="23px"
                color="#212432"
                as="b"
              >
                Review Order
              </Text>
            </Box>
            <Spacer />
            <Box px="20px " pt="10px">
              <Button colorScheme="cyan" variant="link">
                <GoChevronLeft /> <Link to="/cart">Edit Cart</Link>
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box
          h="50px"
          bg="#fafcfd"
          w="100%"
          p={1}
          color="black"
          margin="auto"
          boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
        >
          <Flex>
            <Box px="20px " pt="10px">
              <Text fontFamily="Maison Neue" fontSize="12px" color="#7b7f92">
                ITEM
              </Text>
            </Box>
            <Spacer />
            <Box px="20px " pt="10px">
              <Text color="#7b7f92" fontSize="12px">
                PRICE
              </Text>
            </Box>
          </Flex>
        </Box>

        {cartData.map((item) => (
          <Box
            h="50px"
            bg="#fafcfd"
            w="100%"
            p={1}
            color="black"
            margin="auto"
            boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
          >
            <Flex>
              <Box px="20px " pt="10px">
                <Text
                  as="b"
                  fontFamily="Maison Neue"
                  fontSize="16px"
                  color="#212432"
                >
                  {`${item.day}-Day Pass`}
                </Text>
              </Box>
              <Spacer />
              <Box px="20px " pt="10px">
                <Text
                  as="b"
                  fontFamily="Maison Neue"
                  fontSize="16px"
                  color="#212432"
                >
                  {`$${item.price}`}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
        <Box
          h="50px"
          bg="#fafcfd"
          w="100%"
          p={1}
          color="black"
          margin="auto"
          boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
        >
          <Flex>
            <Box px="20px " pt="10px">
              <Text
                as="b"
                fontFamily="Maison Neue"
                fontSize="22px"
                color="#212432"
              >
                Order Total:
              </Text>
            </Box>
            <Spacer />
            <Box px="20px " pt="10px">
              <Text
                as="b"
                fontFamily="Maison Neue"
                fontSize="22px"
                color="#212432"
              >
                {`$${sum}`}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box className="bill_maindiv">
        <Box
          h="65px"
          bg="#fafcfd"
          w="100%"
          p={4}
          color="black"
          margin="auto"
          boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
        >
          <Text
            fontFamily="Maison Neue - 600"
            fontSize="19px"
            lineHeight="23px"
            color="#212432"
            as="b"
          >
            Billing Information
          </Text>
        </Box>

        <Container maxW="container.sm" bg="white" color="white">
          
          <form onSubmit={handleSubmit}>
          <lable>City</lable>
            <Input required type="text" placeholder="City Name" color="black" />
            <lable color="black">
              State / Province / Region
            </lable>
            <Select required placeholder="Select One" color="black">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>

            <lable color="black">Postal Code</lable>
            <Input
             required
              type="number"
              placeholder="Postal Code / Zip Code"
              color="black"
            />

            <lable color="black">Country</lable>
            <Select required placeholder="India" color="black">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>

            <Flex> 
               <Button colorScheme="teal" variant="link">
                Cancel
              </Button>
              <Spacer />
              <WrapItem>
                <Input style={{cursor:"pointer"}} type={"submit"} value={"PROCEED TO PAYMENT"} bgColor="teal"  height="55px" mt={2}/>
              </WrapItem>
             </Flex>
          </form>
        </Container>
      </Box>

      <Text textAlign="center" mb={20} FB={1}>
        By purchasing an FB Plus Pass, you agree to Fitness Blender’s FB Plus
        Pass Terms and Conditions, including no refunds.
      </Text>
    </div>
  );
};

export default Bill_Page;
