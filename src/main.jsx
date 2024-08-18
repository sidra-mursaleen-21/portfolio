import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraBaseProvider, ChakraProvider, Text } from "@chakra-ui/react";
import Theme from "./theme/index.jsx";
import emailjs from "emailjs-com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={Theme}>
    <App />
    {/* <CustomCursor /> */}
  </ChakraProvider>
);
