import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Logo from "../atoms/Logo";
import NavBar from "../molecules/NavBar";
import PrimaryButton from "../atoms/PrimaryButton";
import BackgroundImage from "../atoms/images/black_and_white.jpeg";

export default function MainSection() {
  return (
    <>
      <Box
        sx={{
          ...parallaxBackgroundStyles,
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavBar sx={{ marginTop: "50%", marginLeft: "50%" }} />
        <Logo />
      </Box>
    </>
  );
}

const parallaxBackgroundStyles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
