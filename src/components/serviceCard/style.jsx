const style = {
    card: {
      p: "35px 25px",
      rounded: "lg",
      boxShadow: "xl",
      position: "relative",
      w: { base: "280px", md: "300px"},
      transition: "all 0.4s ease-in-out",
      _before: {
        content: `""`,
        position: "absolute",
        bottom: "100%",
        left: 0,
        width: "100%",
        height: "0",
        backgroundColor: "#FFA500",
        zIndex: -1,
        transition: "all 0.4s ease-in-out",
      },
      _hover: {
        color: "#fff",
        _before: {
          bottom: 0,
          height: "100%",
          transition: "all 0.4s ease-in-out",
        },
      },
    },
    icon: {
      position: "relative",
      w: "fit-content",
      transition: "all 0.4s ease-in-out",
    },
    circle: {
      position: "absolute",
      left: 0,
      w: "46px",
      h: "46px",
      borderRadius: "50%",
      bgColor: "rgba(244,169,80,0.10)",
      bottom: "-8px",
    },
  };
  
  export default style;
  