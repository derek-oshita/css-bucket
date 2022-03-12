import Box from "@mui/material/Box";
import MainSection from "./components/organisms/MainSection";
import PrimaryButton from "./components/atoms/PrimaryButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PrimaryButton id="shop-button" text={"Shop"} />
      {/* <Box
        sx={{
          height: "100vh",
          width: "100vh",
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
      ></Box> */}
    </div>
  );
}

export default App;
