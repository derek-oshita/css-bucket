import PropTypes from "prop-types";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export default function NavToggleButton({ onClick }) {
  return (
    <ToggleButton
      onClick={onClick}
      sx={{
        cursor: "pointer",
        backgroundColor: "transparent",
        color: "primary.main",
        border: "none",
        mr: 2,
      }}
    >
      <FormatAlignJustifyIcon />
    </ToggleButton>
  );
}

NavToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
