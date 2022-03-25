import Box from "@mui/material/Box";
import MainSection from "./components/organisms/MainSection";
import PrimaryButon from "./components/atoms/PrimaryButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          height: "100vh",
          width: "100%",
        }}
      >
        <MainSection />
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vh",
          backgroundColor: "black",
        }}
      ></Box>
    </div>
  );
}

export default App;
