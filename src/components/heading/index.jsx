import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ heading, span }) => {
  return (
    <Heading
      textTransform="capitalize"
      textAlign="center"
      mb="50px"
      fontSize="30px"
      fontWeight={700}
    >
      {heading}
      <Text textTransform="uppercase" as="span" color="#FFA500">
        {" "}
        {span}
      </Text>
    </Heading>
  );
};

export default CustomHeading;
