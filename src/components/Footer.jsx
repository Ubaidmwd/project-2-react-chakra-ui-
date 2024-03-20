import React from "react";
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
        <Stack direction={["column", "row"]}>
          <VStack
            w={"full"}
            alignItems={"stretch"}
            borderRight={["none", "1px solid white"]}
            px={"4"}
          >
            <Heading size="md" textTransform={"uppercase"} textAlign={"center"}>
              Suscribe to get updates
            </Heading>
            <HStack borderBottom={"2px solid white"}>
              <Input
                type="text"
                placeholder="Enter Your Email..."
                border={"none"}
                borderRadius="none"
                outline={"none"}
                focusBorderColor={"none"}
                focusBorder
              />
              <Button
                p={"0"}
                colorScheme="purple"
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}
              >
                <AiOutlineSend />
              </Button>
            </HStack>
          </VStack>
          <VStack w={"full"} borderRight={["none", "1px solid white"]}>
            <Heading textTransform={"uppercase"} textAlign={"center"}>
              Videos Hub
            </Heading>
            <Text>All Rights Received</Text>
          </VStack>
          <VStack w={"full"}>
            <Heading
              textTransform={"uppercase"}
              textAlign={"center"}
              size={"md"}
            >
              Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"white"}>
              <a href="https://www.youtube.com/">Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"white"}>
              <a href="https://www.instagram.com/">Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme={"white"}>
              <a href="https://www.github.com/">Github</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
