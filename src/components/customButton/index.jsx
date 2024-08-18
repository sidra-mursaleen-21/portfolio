import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ text, href, onClick, type }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="unstyled"
      textTransform="capitalize"
      fontWeight={600}
      bgColor="#FFA500"
      fontSize="18px"
      h="50px"
      w="100px"
      color="#fff"
      transition="all 0.4s ease-in-out"
      borderRadius="10px"
      _hover={{
        color: "black",
        bgColor: "#fff",
        border: "2px solid #FFA500",
      }}
    >
      <Link target="_blank" _hover={{ textDecoration: "none" }} href={href}>
        {text}
      </Link>
    </Button>
  );
};

export default CustomButton;
