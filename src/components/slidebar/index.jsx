import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import style from "./style";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { navLinks } from "../../utils/data";

const Slidebar = ({ clicked }) => {
  return (
    <Box sx={style.slideBar}>
      <Flex pt="20px" gap="30px" alignItems="center" justify="center">
        <Box href="#" as={Link}>
          <Heading
            color="#FFA500"
            fontSize={{ base: "xl" }}
            fontFamily="Agustina, sans-serif"
            fontWeight="normal"
            sx={{
              "@font-face": {
                fontFamily: "Agustina",
                src: "url('/fonts/Agustina.otf') format('opentype')",
              },
            }}
          >
            &lt;Sidra Mursaleen /&gt;
          </Heading>
        </Box>
        <Circle as="button" onClick={clicked} sx={style.cross}>
          <Icon as={IoMdClose} />
        </Circle>
      </Flex>
      <Stack padding="15px 30px" gap="20px">
        {navLinks.map((object, index) => {
          return (
            <Box
              key={index}
              _hover={{ textDecoration: "none" }}
              href={object.href}
              as={Link}
            >
              <Text sx={style.links}>{object.title}</Text>
            </Box>
          );
        })}
        {/* <Box as={Link}>
          <Text sx={style.links}>Home</Text>
        </Box>
        <Box as={Link}>
          <Text sx={style.links}>Services</Text>
        </Box>
        <Box as={Link}>
          <Text sx={style.links}>Skills</Text>
        </Box>
        <Box as={Link}>
          <Text sx={style.links}>Portfolio</Text>
        </Box>
        <Box as={Link}>
          <Text sx={style.links}>Contact Us</Text>
        </Box> */}
      </Stack>
    </Box>
  );
};

export default Slidebar;
