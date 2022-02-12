import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo() {
  return (
    <Box sx={{ p: 2, backgroundColor: "black" }}>
      <Typography variant="h1" style={{ color: "white", fontSize: "5em" }}>
        THE CONTORTIONIST
      </Typography>
    </Box>
  );
}

Logo.propTypes = {};
