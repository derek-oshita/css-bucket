import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Logo from "../atoms/Logo";
import NavBar from "../molecules/NavBar";
import PrimaryButton from "../atoms/PrimaryButton";

export default function MainSection() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <NavBar sx={{ zIndex: 2 }} />
        <Logo></Logo>
      </Box>
    </>
  );
}
