import * as React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";

import Logo from "../atoms/Logo";
import NavBar from "../molecules/NavBar";
import PrimaryButton from "../atoms/PrimaryButton";

export default function MainSection() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Logo></Logo>
    </Container>
  );
}
