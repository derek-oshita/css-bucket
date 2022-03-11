import Box from "@mui/material/Box";
import NavBar from "./components/molecules/NavBar";
import MainSection from "./components/organisms/MainSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box
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
          backgroundColor: "green",
        }}
      ></Box>
    </div>
  );
}

export default App;
