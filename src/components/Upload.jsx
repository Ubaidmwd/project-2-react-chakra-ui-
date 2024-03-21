import { Container, HStack, Input, VStack, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Upload = () => {
  return (
    <Container
      maxW={"container.xl"}
      height={"100vh"}
      p={"16"}
      colorScheme="red"
    >
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"} />
        <form>
          <HStack>
            <Input
              required
              type="file"
              css={{
                "&::file-selector-button": {
                  border: "none",
                  width: "cal(100% + 36px)",
                  height: "100%",
                  marginLeft: "-18px",
                  color: "purple",
                  backgroundColor: "white",
                  cursor: "pointer",
                },
              }}
            />
            <Button colorScheme="purple" type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
