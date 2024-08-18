import React, { useEffect, useState } from "react";
import {
  Box,
  Circle,
  Heading,
  Icon,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { GiMaterialsScience } from "react-icons/gi";
import style from "./style";

const ServiceCard = ({ object }) => {
  const { icon, heading, text } = object;

  const [hover, setHover] = useState(false);

  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      transform={hover ? "translateY(-10%)" : null}
      _before={hover ? null : { bottom: "100%", h: "0" }}
      sx={{ ...style.card }}
    >
      <Stack alignItems="center" gap="20px">
        <Box transform={hover ? "rotateY(180deg)" : null} sx={style.icon}>
          <Circle display={hover ? "none" : "block"} sx={style.circle} />
          <Icon
            position="relative"
            fontSize="60px"
            color={hover ? "#fff" : "#FFA500"}
            as={icon}
          />
        </Box>
        <Heading textTransform="capitalize" fontSize="20px" fontWeight={600}>
          {heading}
        </Heading>
        <Text textAlign="center" fontSize="16px" lineHeight="1.7em">
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
