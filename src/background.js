import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "./assets/images/ai1.png";

const BackgroundWrapper = ({ children, hasBackground }) => {
  const backgroundStyle = {
    backgroundImage: hasBackground ? `url(${backgroundImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    position: "relative",
  };

  return <Box sx={backgroundStyle}>{children}</Box>;
};

export default BackgroundWrapper;
