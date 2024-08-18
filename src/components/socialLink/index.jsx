import { Circle, Icon, Link } from "@chakra-ui/react";
import React from "react";

const SocialLink = ({ object }) => {
  const { top, right, icon, iconColor, bottom, left, bgColor, position, href } =
    object;

  return (
    <Circle
      as={Link}
      href={href}
      target="_blank"
      position={position ? " relative" : "absolute"}
      top={top ? top : null}
      right={right ? right : null}
      bottom={bottom ? bottom : null}
      left={left ? left : null}
      w="50px"
      h="50px"
      bgColor={bgColor}
    >
      <Icon as={icon} color={iconColor} fontSize="26px" />
    </Circle>
  );
};

export default SocialLink;
