import * as React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PrimaryButton(props) {
  const { text, onClick } = props;
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{ backgroundColor: "red" }}
        variant="contained"
        onClick={onClick}
      >
        {text || "Untitled"}
      </Button>
    </Stack>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
