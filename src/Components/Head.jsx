import React, { useState } from "react";
import Box from "@mui/material/Box";
import logo from "../Assests/logo.png";
import togglebutton from "../Assests/togglebutton.png";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const pages = ["APP", "ASSEST", "ABOUT US", "OPPORTUNITIES"];
const Head = ({ toggleMode, mode }) => {
  const theme = useTheme();
  console.log(theme);
  const [state, setState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={index}>
            <ListItemButton sx={{ color: `${theme.palette.text.secondary}` }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ background: "#ffffff", color: "#000000" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        <Box>
          <img src={logo} alt="Ek bazar" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {pages.map((item, ind) => {
            return (
              <Typography
                sx={{ mx: 2, display: { md: "block", sm: "none", xs: "none" } }}
                key={ind}
              >
                {item}
              </Typography>
            );
          })}
          <Button onClick={() => toggleMode()}>
            {mode === "dark" ? (
              <img src={togglebutton} alt="toggle" />
            ) : (
              <img src={togglebutton} alt="toggle" />
            )}
          </Button>
          <Button
            sx={{
              display: { md: "block", sm: "none", xs: "none" },
              background:
                "linear-gradient(97.01deg, #0078B7 8.16%, #50A6ED 103.71%)",
              border: "3px solid #000000",
              borderRadius: "56px",
              color: "#FFFFFF",
              mx: 3,
              px: 3,
            }}
          >
            Launch App
          </Button>
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  sx={{
                    display: { md: "none", sm: "block", xs: "block" },
                    color: "black",
                    mx: { md: 0, xs: 1 },
                  }}
                >
                  <MenuIcon size={20} />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Head;
