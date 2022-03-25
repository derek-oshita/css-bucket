import { useSpring, animated, config } from "react-spring";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo() {
  const animatedProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontSize: {
            xs: "2em",
            sm: "3.5em",
            md: "5em",
          },
          backgroundColor: "transparent",
          boxShadow: "none",
          lineHeight: 0,
        }}
      >
        <animated.h4 style={animatedProps}>THE CONTORTIONIST</animated.h4>
      </Typography>
    </Box>
  );
}

Logo.propTypes = {};
