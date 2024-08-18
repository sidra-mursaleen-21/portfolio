import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        // cursor: 'url("/images/cursor.png"), auto',
        overflowY: "scroll",
      },
      // "::-webkit-scrollbar": {
      //   // cursor:"default",
      //   width: "12px", // Width of the scrollbar
      // },
      // "::-webkit-scrollbar-track": {
      //   // cursor:"default",
      //   bg: "gray.100", // Background color of the track
      // },
      // "::-webkit-scrollbar-thumb": {
      //   // cursor:"default",
      //   bg: "#FFA500", // Color of the scrollbar thumb
      // },
    },
  },
});

export default Theme;
