import "./App.css";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import HeroSection from "./Components/HeroSection";
import Leverages from "./Components/Leverages";
import OurAssets from "./Components/OurAssets";
import StableCoin from "./Components/StableCoin";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeCustomize } from "./Components/ThemeCustomize";
import { useState, useMemo } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(() => {
    let theme = ThemeCustomize(mode);
    return theme;
  }, [mode]);
  console.log(mode);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Head toggleMode={toggleMode} mode={mode} />
        <HeroSection mode={mode} />
        <StableCoin mode={mode} />
        <OurAssets mode={mode} />
        <Leverages mode={mode} />
        <Footer mode={mode} />
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
