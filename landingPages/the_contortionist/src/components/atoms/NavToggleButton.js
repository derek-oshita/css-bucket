import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export default function NavToggleButton({ onClick }) {
  return (
    <ToggleButton
      onClick={onClick}
      value="justify"
      key="justify"
      sx={{
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent",
        },
      }}
    >
      <FormatAlignJustifyIcon />
    </ToggleButton>
  );
}

NavToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
