import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { typewriter } from "../../utils/data";
import { Text } from "@chakra-ui/react";

const CustomTypeWriter = () => {
  return (
    <Text textTransform="capitalize" as="span" color="#FFA500">
      <Typewriter
        cursorColor="#FFA500"
        words={typewriter}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={40}
      />
    </Text>
  );
};

export default CustomTypeWriter;
