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
          height: "100vh",
          width: "100vw",
        }}
      >
        <img
          src={BackgroundImage}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <NavBar sx={{ zIndex: 1 }} />
        <Logo />
      </Box>
    </>
  );
}
