import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function PrimaryButton(props) {
  const { text, onClick } = props;
  return (
    <Box sx={{ p: 2 }}>
      <Button
        style={{
          background: "linear-gradient(to right, #ff0800, #e32636)",
        }}
        component="span"
        variant="contained"
        onClick={onClick}
      >
        {text || "Untitled"}
      </Button>
    </Box>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
