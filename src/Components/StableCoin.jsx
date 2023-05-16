import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import stablecoinimg from "../Assests/stablecoinimg.png";
import vector from "../Assests/vactor.png";
import React from "react";

const StableCoin = ({ mode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${vector})`,
        backgroundSize: "25% 50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
      }}
    >
      <Container>
        <Grid container columnSpacing={10}>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src={stablecoinimg}
              alt="stablecoinimg"
              width="100%"
              height="100%"
            />
          </Grid>
          <Grid item md={6} xs={12} sx={{ position: "relative" }}>
            <Box py={{ md: 20, sm: 4, xs: 4 }}>
              <Typography
                sx={{
                  display: { md: "block", sm: "none", xs: "none" },
                  position: "absolute",
                  top: 105,
                  fontSize: "68px",
                  fontWeight: 700,
                  fontFamily: "DOS",
                  background:
                    "linear-gradient(180deg, #2B4FDE -18%, #C8FEFE 22.5%, #30A9C4 67.84%, #C4FFF8 116%)",
                  opacity: "0.15",
                  webkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  width: "max-content",
                }}
              >
                STABLE COIN
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "40px", sm: "30px", xs: "26px" },
                  fontWeight: 500,
                  fontFamily: "DOS",
                  background: `${theme.palette.text.color3}`,
                  webkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  width: "max-content",
                }}
              >
                STABLECOIN $MIM
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: { md: "16px", sm: "14", xs: "12" },
                  textAlign: "start",
                  color: `${theme.palette.text.secondary}`,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </Typography>
              <Button
                sx={{
                  my: 3,
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StableCoin;
