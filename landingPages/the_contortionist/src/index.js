import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F88379", // this is the pink/orange color
    },
    secondary: {
      main: "#ffcc80",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
