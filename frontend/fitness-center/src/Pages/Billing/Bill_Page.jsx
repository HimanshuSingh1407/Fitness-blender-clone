import {
  Box,
  Button,
  Center,
  FormLabel,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Select,
  Spacer,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./Bill.css";
import { GoChevronLeft } from "react-icons/go";

const Bill_Page = () => {
    useEffect(() => {
        document.title="Check Out Page"
     
      }, []);
  return (
    <div className="utter_div">
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
                <GoChevronLeft /> Edit Cart
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
                7-Day Pass
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
                $3.99
              </Text>
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
                $3.99
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
          <FormControl>
            <FormHelperText>City</FormHelperText>
            <Input type="email" placeholder="City Name" color="black" />

            <FormHelperText color="black">
              State / Province / Region
            </FormHelperText>
            <Select placeholder="Select One" color="black">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>

            <FormHelperText color="black">Postal Code</FormHelperText>
            <Input
              type="email"
              placeholder="Postal Code / Zip Code"
              color="black"
            />

            <FormHelperText color="black">Country</FormHelperText>
            <Select placeholder="India" color="black">
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
                <Button colorScheme="linkedin" height="55px" mt={2}>
                  PROCEED TO PAYMENT
                </Button>
              </WrapItem>
            </Flex>
          </FormControl>
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
