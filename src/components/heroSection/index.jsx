import { Box, Circle, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CustomTypeWriter from "../typewriter";
import { socialLink } from "../../utils/data";
import SocialLink from "../socialLink";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Flex
      m="auto"
      maxWidth="1200px"
      flexDirection={{ base: "column", md: "row" }}
      justify="space-evenly"
      align="center"
      pt={{ base: "120px", md: "160px" }}
      gap="20px"
    >
      <Box position="relative">
        <Circle
          h={{ base: "260px", sm: "280px" }}
          w={{ base: "260px", sm: "280px" }}
          bgColor="#FFA500"
        >
          <Circle
            h={{ base: "235px", sm: "255px" }}
            w={{ base: "235px", sm: "255px" }}
            bgColor="#fff"
          >
            <Circle
              bgImage="url(/images/image-2.jfif)"
              backgroundPosition="calc(20% - 100%)calc(100% - 70%)"
              backgroundSize="cover"
              h={{ base: "190px", sm: "200px" }}
              w={{ base: "190px", sm: "200px" }}
            ></Circle>
          </Circle>
        </Circle>
        {socialLink.map((object, index) => {
          return <SocialLink key={index} object={object} />;
        })}
      </Box>
      <Box
        paddingX="20px"
        h={{ md: "420px", lg: "100%" }}
        maxW="580px"
        w={{ base: "100%", md: "400px", lg: "100%" }}
      >
        <Heading fontSize={{ base: "30px", md: "40px" }} fontWeight={700}>
          Hello,
        </Heading>
        <Heading fontSize={{ base: "30px", md: "40px" }} fontWeight={700}>
          I am <CustomTypeWriter />
        </Heading>
        <Text
          style={{ lineHeight: "40px", fontSize: "20px", color: "#868e96" }}
        >
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web and Mobile applications with JavaScript / Reactjs /
          Nodejs / React Native and some other cool libraries and frameworks.
        </Text>
      </Box>
    </Flex>
  );
};

export default HeroSection;
