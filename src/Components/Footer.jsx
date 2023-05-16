import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import footerbg from "../Assests/footerbg.png";
import footernytbg from "../Assests/footernytbg.png";
import logo from "../Assests/logo.png";
import social from "../Assests/social.png";
import React from "react";

const Footer = ({ mode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${mode === "dark" ? footernytbg : footerbg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={3} sm={6} xs={12}>
            <Box sx={{ py: { md: 8, xs: 2 }, mx: { sm: 6, xs: 0, md: 0 } }}>
              <Box component="img" src={logo} alt="brand" mb={2} />
              <Typography
                sx={{
                  fontSize: { md: "26px", sm: "20px", xs: "16px" },
                  fontWeight: 400,
                  fontFamily: "DOS",
                  color: `${theme.palette.text.secondary}`,
                }}
              >
                ABOUT E-BAZAR
              </Typography>
              <Typography
                sx={{
                  py: 1,
                  fontFamily: "Roboto",
                  fontSize: { md: "14px", sm: "14px", xs: "12px" },
                  color: `${theme.palette.text.color4}`,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt elit, sed do eiusmod tempor incididunt
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                mx: { md: 6, xs: 0 },
                mt: { md: 19, sm: 19, xs: 2 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "22px", sm: "22px", xs: "20px" },
                  fontWeight: 500,
                  fontFamily: "DOS",
                  color: `${theme.palette.text.secondary}`,
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%);",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "25px",
                  }}
                >
                  <BsDiscord size={20} />
                </Box>
                <Box
                  sx={{
                    background:
                      "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%);",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "25px",
                    mx: 1,
                  }}
                >
                  <Box component="img" src={social} alt="social" />
                </Box>
                <Box
                  sx={{
                    background:
                      "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%);",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "25px",
                  }}
                >
                  <BsTwitter size={20} />
                </Box>
                <Box
                  sx={{
                    background:
                      "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%);",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "25px",
                    mx: 1,
                  }}
                >
                  <FaTelegramPlane size={20} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                mx: { md: 6, xs: 0 },
                mt: { md: 19, sm: 0, xs: 2 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "22px", sm: "22px", xs: "20px" },
                  fontWeight: 500,
                  fontFamily: "DOS",
                  color: `${theme.palette.text.secondary}`,
                }}
              >
                SUPPORT & HELP
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "14px", xs: "12px" },
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  color: `${theme.palette.text.color4}`,
                }}
              >
                Blog
                <br />
                Faq’s
                <br />
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                mx: { md: 6, xs: 0 },
                mt: { md: 19, sm: 0, xs: 2 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "22px", sm: "22px", xs: "20px" },
                  fontWeight: 500,
                  fontFamily: "DOS",
                  color: `${theme.palette.text.secondary}`,
                }}
              >
                QUICK LINKS
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "14px", xs: "12px" },
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  color: `${theme.palette.text.color4}`,
                }}
              >
                NFT
                <br />
                Our Team
                <br />
                Privacy Policy
                <br />
                Terms & Conditions
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: { md: "16px", xs: "12px" },
            fontFamily: "Roboto",
            color: `${theme.palette.text.secondary}`,
          }}
        >
          © 2023 ebazar.com | All right reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
