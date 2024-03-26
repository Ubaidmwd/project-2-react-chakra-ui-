import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"}>
      <form action="">
        <VStack
          align={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading alignSelf={"center"}>Videos Hub</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input
            placeholder={"Name "}
            type={"text"}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            placeholder={"Email "}
            type={"email"}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            placeholder={"password"}
            type={"password"}
            required
            focusBorderColor={"purple.500"}
          />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgotpassword"}>Forgot Password?</Link>
          </Button>
          <Button colorScheme={"purple"} type="submit">
            Signup
          </Button>
          <Text textAlign={"right"}>
            ALREADY HAVE ACCOUNT?
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/login"}> Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
