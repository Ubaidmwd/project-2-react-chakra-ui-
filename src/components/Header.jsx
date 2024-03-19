import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={"fixed"}
        top={"4"}
        left={"4"}
        p={"0"}
        colorScheme="purple"
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button variant={"ghost"} colorScheme="purple">
                <Link to={"/"}>Home</Link>
              </Button>
              <Button variant={"ghost"} colorScheme="purple">
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme="purple">
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme="purple">
                <Link to={"/upload"}>Upload Videos</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
