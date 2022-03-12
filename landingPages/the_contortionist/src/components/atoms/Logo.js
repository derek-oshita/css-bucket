import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });
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
        <animated.h4 style={props}>THE CONTORTIONIST</animated.h4>;
        {/* THE CONTORTIONIST */}
      </Typography>
    </Box>
  );
}

function Text() {
  return;
}

Logo.propTypes = {};
