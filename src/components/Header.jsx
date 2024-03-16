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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
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
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
    </>
  );
};

export default Header;
