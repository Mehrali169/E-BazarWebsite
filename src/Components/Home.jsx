import Footer from "./Footer";
import Head from "./Head";
import HeroSection from "./HeroSection";
import Leverages from "./Leverages";
import OurAssets from "./OurAssets";
import StableCoin from "./StableCoin";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeCustomize } from "./ThemeCustomize";
import { useState, useMemo } from "react";
import React from "react";

const Home = () => {
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
      <Head toggleMode={toggleMode} mode={mode} />
      <HeroSection mode={mode} />
      <StableCoin mode={mode} />
      <OurAssets mode={mode} />
      <Leverages mode={mode} />
      <Footer mode={mode} />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default Home;
