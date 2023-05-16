import { createTheme } from "@mui/material/styles";

const theme = {
  light: {
    text: {
      primary: "#ffffff",
      secondary: "#000000",
      color1: "#292929",
      color2: "#D6D6D6",
      color3: "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%)",
      color4: "#2B93CA",
    },
    background: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },

  dark: {
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      color1: "#FFFFFF",
      color2: "#FFFFFF",
      color3:
        "linear-gradient(180deg, #2B4FDE -18%, #C8FEFE 22.5%, #30A9C4 67.84%, #C4FFF8 116%)",
      color4: "#C8FEFE",
    },
    background: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
};

export const ThemeCustomize = (mode) =>
  createTheme({
    palette: {
      mode,
      ...theme[mode],
    },
  });
