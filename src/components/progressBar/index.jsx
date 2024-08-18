import { Flex, Text } from "@chakra-ui/react";
import { Line } from "rc-progress";
import React from "react";

const ProgressBar = ({ language, percent }) => {
  return (
    <Flex align="center">
      <Text
        w="200px"
        fontSize={{ base: "16px", md: "18px" }}
        textTransform="uppercase"
        fontWeight={700}
      >
        {language}
      </Text>
      <Line
        percent={percent}
        strokeWidth={2}
        trailWidth={2}
        strokeColor="#FFA500"
      />
    </Flex>
  );
};

export default ProgressBar;
