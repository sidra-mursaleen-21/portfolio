import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import CustomButton from "../customButton";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [clientData, setClientData] = useState();

  const inputField = (key, value) => {
    setClientData({ ...clientData, [key]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        name: clientData.name,
        email: clientData.email,
        message: clientData.message,
        subject: clientData.subject,
        to_name: "Sidra Mursaleen",
        from_name: clientData.name,
      })
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email has been sent!",
            showConfirmButton: true,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Try again later",
            showConfirmButton: true,
            timer: 1500,
          });
          e.target.reset();
        }
      );
  };

  return (
    <Box
      id="contact"
      m="auto"
      my="40px"
      maxW="1200px"
      w={{ base: "100%", md: "95%", lg: "90%", xl: "1200px" }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        mt="20px"
        align="center"
        justify="space-between"
        gap={{ base: "30px", md: "0" }}
      >
        <Stack
          paddingX="20px"
          h="fit-content"
          w={{ base: "100%", md: "550px" }}
        >
          <Heading fontSize="25px" fontWeight={700}>
            Get In Touch
          </Heading>
          <Text
            style={{
              lineHeight: { base: "5px", md: "40px" },
              fontSize: "20px",
            }}
          >
            If you want to Hire me or you have work for me or you have a
            question about me you can freely contact me. I am always here to
            answer your questions. I will give answer on your email.
          </Text>
          <Flex
            fontSize={{ base: "18px", lg: "20px" }}
            align="center"
            gap="15px"
          >
            <Icon as={MdOutlineEmail} />
            <Text>sidramursaleen21@gmail.com</Text>
          </Flex>
          <Flex fontSize={{ base: "18px", lg: "20px" }} gap="15px">
            <Icon as={TiPhoneOutline} />
            <Text>+923001499008</Text>
          </Flex>
        </Stack>
        <Box
          alignSelf="end"
          bgColor="#fff"
          border="none"
          w={{ base: "100%", md: "550px" }}
          padding="20px 30px"
        >
          <Heading fontSize="25px" fontWeight={700}>
            Massage Me
          </Heading>
          <Stack as="form" onSubmit={submitForm} mt="20px" gap="20px">
            {/* <Flex gap="20px"> */}
              <Input
                onChange={(e) => inputField("name", e.target.value)}
                variant="unstyled"
                type="text"
                required
                border="1px solid #FFA500"
                paddingX="20px"
                borderRadius="10px"
                h="50px"
                _placeholder={{ color: "#868e96" }}
                fontSize="18px"
                placeholder="Your Name"
              />
              <Input
                onChange={(e) => inputField("email", e.target.value)}
                required
                variant="unstyled"
                type="email"
                border="1px solid #FFA500"
                paddingX="20px"
                borderRadius="10px"
                h="50px"
                _placeholder={{ color: "#868e96" }}
                fontSize="18px"
                placeholder="Email"
              />
            {/* </Flex> */}
            <Input
              onChange={(e) => inputField("subject", e.target.value)}
              variant="unstyled"
              required
              type="text"
              border="1px solid #FFA500"
              paddingX="20px"
              borderRadius="10px"
              h="50px"
              _placeholder={{ color: "#868e96" }}
              fontSize="18px"
              placeholder="Subject"
            />
            <Textarea
              onChange={(e) => inputField("message", e.target.value)}
              required
              type="text"
              fontSize="18px"
              border="1px solid #FFA500"
              paddingX="20px"
              borderRadius="10px"
              variant="unstyled"
              _placeholder={{ color: "#868e96" }}
              placeholder="Write your massage"
            />
            <CustomButton type="submit" text="Submit" />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
