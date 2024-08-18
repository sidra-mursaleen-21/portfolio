import { useEffect, useState } from "react";
import {
  Box,
  Circle,
  Flex,
  keyframes,
  Text,
  transition,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const Skills = ({ object }) => {
  const { skill, percentage, top } = object;

  const variant = {
    hidden: {
      opacity: 0,
      bottom: "-50px",
    },
    show: {
      opacity: 1,
      bottom: "90px",
      transition: {
        delay: 4,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Flex
      align="center"
      justify="center"
      sx={{
        position: "relative",
        h: "220px",
        w: "200px",
        border: "2px solid #fff",
        backgroundColor: "#fff",
        overflow: "hidden",
        backfaceVisibility: "hidden",
        boxShadow: "lg",
      }}
    >
      <Box
        as={motion.div}
        variants={variant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        position="absolute"
        paddingX="20px"
        textAlign="center"
        zIndex={1}
        fontWeight={700}
        fontSize="20px"
      >
        <Text textTransform="uppercase">{skill}</Text>
        <Text>{percentage}</Text>
      </Box>
      <Circle
        as={motion.div}
        initial={{ top: "100%" }}
        whileInView={{
          rotate: [0, 360],
          top: top,
        }}
        transition={{ duration: 0.4, ease: "linear", repeat: "Infinity" }}
        viewport={{ once: true }}
        sx={{
          bgColor: "#FFA500",
          position: "absolute",
          height: "200%",
          width: "200%",
          left: "-50%",
          borderRadius: "30%",
          transition: "4s ease-in-out",
        }}
      />
    </Flex>
  );
};

export default Skills;
