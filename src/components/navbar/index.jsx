import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import style from "./style";
import { navLinks } from "../../utils/data";

const Navbar = ({ clicked }) => {
  return (
    <Flex sx={style.navBar} align="center" zIndex="2">
      <Box _hover={{ textDecoration: "none" }} href="#" mt="8px" as={Link}>
        <Heading
          _hover={{
            color: "#fff",
          }}
          pt="10px"
          fontSize={{ base: "xl", md: "4xl" }}
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
      <Flex sx={{ ...style.navMenu }}>
        {navLinks.map((object, index) => {
          return (
            <Box
              _hover={{ textDecoration: "none" }}
              key={index}
              href={object.href}
              as={Link}
            >
              <Text sx={style.links}>{object.title}</Text>
            </Box>
          );
        })}
      </Flex>
      <Circle as="button" onClick={clicked} sx={style.hamBurger}>
        <Box sx={style.bar} as="span" />
        <Box sx={style.bar} as="span" />
        <Box sx={style.bar} as="span" />
      </Circle>
    </Flex>
  );
};

export default Navbar;
