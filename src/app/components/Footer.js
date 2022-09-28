import * as React from "react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex">
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <a href="https://github.com/martinsteteris" className="soclink">
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <a
                href="https://www.linkedin.com/in/martins-teteris/"
                className="soclink"
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <a
                href="https://instagram.com"
                className="soclink"
              >
                <InstagramIcon />
              </a>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
