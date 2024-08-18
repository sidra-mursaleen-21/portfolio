import {
  Box,
  Button,
  Circle,
  Flex,
  Icon,
  SimpleGrid,
  Slide,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Skills from "./components/skillBox";
import ServiceCard from "./components/serviceCard";
import Navbar from "./components/navbar";
import Slidebar from "./components/slidebar";
import { project, services, skills } from "./utils/data";
import Project from "./components/projectSection";
import CustomHeading from "./components/heading";
import HeroSection from "./components/heroSection";
import Contact from "./components/contact";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState("");

  const TopBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    });
  }, []);

  return (
    <Box position="relative">
      {/* Navbar */}
      <Navbar clicked={() => setIsOpen(true)} />
      {/* Slide Bar */}
      <Slide
        style={{ zIndex: "2" }}
        transition={{
          exit: { duration: 0.5 },
          enter: { duration: 0.5 },
        }}
        direction="left"
        in={isOpen}
      >
        <Slidebar clicked={() => setIsOpen(false)} />
      </Slide>
      <Flex
        as={Button}
        onClick={() => TopBottom()}
        variant="unstyled"
        align="center"
        justify="center"
        right="10"
        display={scrollPosition ? "flex" : "none"}
        bottom="10"
        zIndex="999"
        position="fixed"
        h="40px"
        borderRadius="lg"
        w="40px"
        bgColor="#FFA500"
      >
        <Icon fontSize="20px" as={IoIosArrowUp} />
      </Flex>
      <Box m="auto" maxW="1440px">
        {/* {Hero Section} */}
        <HeroSection />
        {/* Services Section */}
        <Box id="services" paddingY="80px">
          <CustomHeading heading="my" span="services" />
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            placeItems="center"
            m="auto"
            rowGap="50px"
            marginTop="60px"
            maxW="1100px"
          >
            {services.map((object, index) => {
              return <ServiceCard key={index} object={object} />;
            })}
          </SimpleGrid>
        </Box>
        {/* Skills Section */}
        <Box id="skills" paddingY="70px">
          <CustomHeading heading="my" span="skills" />
          <SimpleGrid
            m="auto"
            marginTop="40px"
            maxW="1100px"
            alignContent="center"
            justifyItems="center"
            rowGap="40px"
            columns={{ base: 1, sm: 2, md: 3 }}
          >
            {skills.map((object, index) => {
              return <Skills key={index} object={object} />;
            })}
          </SimpleGrid>
        </Box>
        {/* Projeect Section */}
        <Box id="portfolio">
          <CustomHeading heading="my" span="projects" />
          <Stack gap={{ base: "50px", md: "100px" }} paddingY="50px">
            {project.map((object, index) => {
              return (
                <Project
                  key={index}
                  object={object}
                  direection={index % 2 !== 0 ? "row-reverse" : "row"}
                />
              );
            })}
          </Stack>
        </Box>
        {/* Contact Section */}
        <Contact />
        {/* Footer Section */}
        <Box
          borderTop="2px solid #FFA500"
          py="15px"
          px="20px"
          textAlign="center"
        >
          <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={600}>
            Created By{" "}
            <Text as="span" color="#FFA500">
              Sidra Mursaleen
            </Text>{" "}
            | 2024 All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
