import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import herosectionbg3 from "../Assests/herosectionbg3.png";
import herosectionnytbg from "../Assests/herosectionnytbg.png";
import ebazarimg from "../Assests/ebazarimg.png";
import ebazarnytimg from "../Assests/ebazarnytimg.png";
import React from "react";

const HeroSection = ({ mode }) => {
  const theme = useTheme();
  console.log(mode);
  return (
    <Box
      sx={{
        backgroundImage: `url(${
          mode === "dark" ? herosectionnytbg : herosectionbg3
        })`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "100%",
        py: 10,
      }}
    >
      <Container>
        <Grid container columnSpacing={10}>
          <Grid item md={6} xs={12}>
            <Box sx={{ height: "100%", py: { md: 8, sm: 4, xs: 2 } }}>
              <Typography
                sx={{
                  fontSize: { md: "55px", sm: "40px", xs: "26px" },
                  textAlign: "start",
                  fontWeight: 400,
                  fontFamily: "DOS",
                  color: `${theme.palette.text.color1}`,
                }}
              >
                MAKE YOUR INTEREST BEARING
                <span style={{ color: "#57C9E5" }}> ASSETS</span> LIQUID
              </Typography>
              <Typography
                sx={{
                  py: 1,
                  textAlign: "start",
                  fontSize: { md: "16px", sm: "12px", xs: "10" },
                  fontWeight: 400,
                  color: `${theme.palette.text.color1}`,
                  fontFamily: "Roboto",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </Typography>
              <Box sx={{ textAlign: "start", py: 4 }}>
                <Button
                  sx={{
                    fontSize: { md: "14px", sm: "12px", xs: "10px" },
                    fontWeight: 700,
                    fontFamily: "DOS",
                    background: "#FFFFFF",
                    border: "3px solid #000000",
                    borderRadius: "56px",
                    color: "#000000",
                    boxShadow: "5px 8px 1px #0078B7",
                    px: 3,
                  }}
                >
                  learn more
                </Button>
                <Button
                  sx={{
                    fontSize: { md: "14px", sm: "12px", xs: "10px" },
                    fontWeight: 700,
                    fontFamily: "DOS",
                    background:
                      "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%)",
                    border: "3px solid #000000",
                    boxShadow: "5px 8px 1px #D6D6D6",
                    borderRadius: "56px",
                    color: "#FFFFFF",
                    px: 3,
                    mx: { md: 3, sm: 3, xs: 2 },
                  }}
                >
                  Launch App
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box sx={{ textAlign: "center" }}>
              {mode === "dark" ? (
                <Box
                  component="img"
                  src={ebazarnytimg}
                  alt="ebazarimg"
                  width="80%"
                  height="80%"
                />
              ) : (
                <Box
                  component="img"
                  src={ebazarimg}
                  alt="ebazarimg"
                  width="80%"
                  height="80%"
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
