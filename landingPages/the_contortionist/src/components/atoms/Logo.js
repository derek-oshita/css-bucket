import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontSize: "5em",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        THE CONTORTIONIST
      </Typography>
    </Box>
  );
}

Logo.propTypes = {};
