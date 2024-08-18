import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ProgressBar from "../progressBar";
import SocialLink from "../socialLink";
import CustomButton from "../customButton";
import { FaGithub } from "react-icons/fa";

const Project = ({ object, direection }) => {
  const {
    width,
    height,
    paragraph,
    title,
    image,
    languages,
    preview,
    href,
    github,
  } = object;

  return (
    <Flex
      paddingX="20px"
      gap={{ base: "40px", md: "10px" }}
      flexDirection={{ base: "column", md: direection }}
      align="center"
      justify="space-evenly"
    >
      <Image
        style={{
          borderRadius: "30px",
          boxShadow:
            "5px 5px 3px rgba(0, 0, 0, 0.1), 5px 5px 1px rgba(0, 0, 0, 0.1), 10px 10px 1px rgba(0, 0, 0, 0.1)",
        }}
        w={width}
        h={height}
        src={image}
      />
      <Stack
        paddingStart={{base:"0" , md:"20px"}}
        gap="10px"
        w={{ base: "100%", sm: "500px", md: "430px", lg: "550px" }}
      >
        <Heading
          textAlign="center"
          textTransform="capitalize"
          fontSize={{ base: "25px", lg: "30px" }}
          fontWeight={700}
          color="#FFA500"
        >
          {title}
        </Heading>
        <Stack mt="20px" gap="10px">
          {languages.map(({ language, percent }, index) => {
            return (
              <ProgressBar key={index} language={language} percent={percent} />
            );
          })}
        </Stack>
        <Text
          style={{
            lineHeight: "30px",
            fontSize: "20pxx",
            color: "#868e96",
          }}
        >
          {paragraph}
        </Text>
        <Flex gap="50px">
          {preview ? <CustomButton text="preview" href={href} /> : null}
          <SocialLink
            object={{
              href: github,
              icon: FaGithub,
              iconColor: "#fff",
              bgColor: "black",
              position: true,
            }}
          />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Project;
