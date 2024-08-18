const style = {
    navBar: {
      py: "12px",
      height: "70px",
      justifyContent: "space-between",
      position: "fixed",
      w: "100%",
      px: "20px",
      bgColor: "#FFA500",
      boxShadow: "md",
    },
    navMenu: {
      fontSize: "17px",
      fontWeight: 600,
      gap: "2rem",
      alignItems: "center",
      display: { base: "none", lg: "flex" },
    },

    links: {
      textTransform:"capitalize",
      p: "5px 8px",
      borderRadius: "5px",
      color: "black",
      _hover: {
        color: "#fff",
      },
    },
  
    hamBurger: {
      h: "45px",
      w: "45px",
      bgColor: "#fff",
      display: { base: "flex", lg: "none" },
      flexDirection: "column",
    },
    bar: {
      w: "20px",
      my: "2px",
      display: "block",
      border: "1px solid #FFA500",
    },

  };
  
  export default style;
  