import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ourassetsimg from "../Assests/ourassetsimg.png";
import vactor2 from "../Assests/vactor2.png";
import effect from "../Assests/effect.png";
import effect2 from "../Assests/effect2.png";
import cardimg1 from "../Assests/cardimg1.png";
import cardimg2 from "../Assests/cardimg2.png";
import cardimg3 from "../Assests/cardimg3.png";
import React from "react";

const data = [
  {
    img: cardimg3,
    heading: "Top efficiency",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ",
  },
  {
    img: cardimg2,
    heading: "Security Audit",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ",
  },
  {
    img: cardimg1,
    heading: "Multichain Solution",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ",
  },
];

const OurAssets = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${effect2})`,
        // backgroundSize: "40% 60%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
      }}
    >
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            backgroundImage: `url(${ourassetsimg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            px: 4,
            py: 10,
            textAlign: "center",
          }}
        >
          <Grid container columnSpacing={4}>
            <Grid item md={3} sm={12} xs={12}>
              <Box
                component="img"
                src={vactor2}
                alt="assetsimg"
                sx={{
                  width: { md: "100%", sm: "80%", xs: "80%" },
                  height: { md: "100%", sm: "80%", xs: "80%" },
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box sx={{ py: 1, mb: { md: 0, xs: 6 }, position: "relative" }}>
                <Typography
                  sx={{
                    fontSize: { md: "55px", sm: "40px", xs: "30px" },
                    fontWeight: 400,
                    fontFamily: "DOS",
                    color: "#ffffff",
                  }}
                >
                  Our Assets
                </Typography>
                <Typography
                  sx={{
                    display: { md: "block", sm: "none", xs: "none" },
                    position: "absolute",
                    top: -20,
                    left: 160,
                    fontSize: "65px",
                    fontWeight: 400,
                    fontFamily: "DOS",
                    color: "#FFFFFF",
                    opacity: "0.15",
                  }}
                >
                  Assets
                </Typography>
                <Typography
                  sx={{
                    fontSize: { md: "16px", sm: "14px", xs: "12px" },
                    fontWeight: 400,
                    fontFamily: "Roboto",
                    color: "#ffffff",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                </Typography>
                <Button
                  sx={{
                    my: 3,
                    fontSize: { md: "18px", sm: "16px", xs: "10px" },
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
            <Grid item md={3} sm={12} xs={12}>
              <Box
                component="img"
                src={vactor2}
                alt="assetsimg"
                sx={{
                  width: { md: "100%", sm: "80%", xs: "80%" },
                  height: { md: "100%", sm: "80%", xs: "80%" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${effect})`,
            backgroundSize: "40% 60%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
          }}
        >
          <Box
            sx={{
              pt: { md: 16, sm: 8, xs: 8 },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "45px", sm: "30px", xs: "26px" },
                fontWeight: 400,
                fontFamily: "DOS",
                textAlign: "center",
                py: { md: 4, sm: 2, xs: 2 },
                color: `${theme.palette.text.secondary}`,
              }}
            >
              WHY CHOOSE E-BAZAR?
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {data.map((item, i) => (
                <Card
                  sx={{
                    maxWidth: 320,
                    minHeight: { md: 360, xs: 250 },
                    borderImage: "linear-gradient(#0078B7, #50A6ED) 30",
                    borderWidth: "4px",
                    borderStyle: "solid",
                    textAlign: "center",
                    margin: 2,
                  }}
                  key={i}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt="item"
                    sx={{ height: "100px" }}
                    py={1}
                  />
                  <CardContent
                    sx={{
                      m: 1,
                      px: 2,
                      height: { md: 230, xs: 150 },
                      textAlign: "start",
                      background:
                        "linear-gradient(176.92deg, #0078B7 -22.59%, #50A6ED 51.32%, #DDF3FE 128.11%)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "26px", sm: "20px", xs: "18px" },
                        fontWeight: 700,
                        color: "#FFFFFF",
                        py: 1,
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          md: "14px",
                          sm: "14px",
                          xs: "12px",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {item.subheading}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurAssets;
