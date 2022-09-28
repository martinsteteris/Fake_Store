import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

const drawerWidth = 340;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ maxHeight: "50px", mt: 2 }}>
      <Box sx={{ maxWidth: 250, margin: "auto" }}>
        <img src={require("./images/LogoBlue.png")} />
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Us
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <AppsIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Box sx={{ maxWidth: 80 }}>
              <Link to={"/"}>
                <img src={require("./images/LogoWhite.png")} />
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "white" }}>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Home
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
              >
                About
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/contact"
              >
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
