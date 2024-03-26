import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form action="">
        <VStack
          align={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Welocome Back</Heading>
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
            Login
          </Button>
          <Text textAlign={"right"}>
            NEW USER?
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}> SignUP</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
