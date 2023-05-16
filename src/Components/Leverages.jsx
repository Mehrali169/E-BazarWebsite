import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import leveragesimg from "../Assests/leveragesimg.png";
import leveragesnytimg from "../Assests/leveragesnytimg.png";
import React from "react";

const Leverages = ({ mode }) => {
  const theme = useTheme();
  return (
    <Container sx={{ py: 4 }}>
      <Grid container columnSpacing={4}>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ position: "relative" }}>
            <Typography
              sx={{
                display: { md: "block", sm: "none", xs: "none" },
                position: "absolute",
                top: -30,
                left: 0,
                fontSize: "65px",
                fontWeight: 400,
                fontFamily: "DOS",
                background:
                  "linear-gradient(180deg, #2B4FDE -18%, #C8FEFE 22.5%, #30A9C4 67.84%, #C4FFF8 116%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                opacity: 0.15,
              }}
            >
              OPPORTUNITEIS
            </Typography>
            <Typography
              sx={{
                mt: { md: 16, sm: 2, xs: 2 },
                fontSize: { md: "45px", sm: "35px", xs: "26px" },
                fontFamily: "DOS",
                fontWeight: 400,
                // background:
                //   "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%)",
                background: `${theme.palette.text.color3}`,
                webkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                // width: "max-content",
                py: 1,
              }}
            >
              LEVERAGES & FARMING OPPORTUNITIES
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "16px", sm: "14px", xs: "12px" },
                // color: "#292929",
                fontFamily: "Roboto",
                color: `${theme.palette.text.secondary}`,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </Typography>
            <Button
              sx={{
                my: 2,
                fontSize: { md: "16px", sm: "14px", xs: "12px" },
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
            <Typography
              sx={{
                fontSize: { md: "17px", sm: "14px", xs: "12px" },
                fontWeight: 700,
                fontFamily: "Roboto",
                color: "#0078B7",
              }}
            >
              About E-bazar Ecosystem
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12} sx={{ textAlign: "center" }}>
          {mode === "dark" ? (
            <Box
              component="img"
              src={leveragesnytimg}
              alt="leveragesimg"
              sx={{
                width: { md: "100%", sm: "80%", xs: "80%" },
                height: { md: "100%", sm: "80%", xs: "80%" },
              }}
            />
          ) : (
            <Box
              component="img"
              src={leveragesimg}
              alt="leveragesimg"
              sx={{
                width: { md: "100%", sm: "80%", xs: "80%" },
                height: { md: "100%", sm: "80%", xs: "80%" },
              }}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Leverages;
