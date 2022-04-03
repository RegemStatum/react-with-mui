import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material";
import React, { FC } from "react";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useAppContext } from "../../context/AppProvider";
import HeaderNav from "./HeaderNav";

const Header: FC = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Typography>This is header</Typography>
          </Grid>
          <Grid
            item
            alignItems="flex-end"
            display={{ xs: "none", md: "block" }}
            ml={{ md: "auto" }}
            mr={{ md: 5 }}
          >
            <HeaderNav />
          </Grid>
          <Grid item display={{ xs: "block", md: "none" }} sx={{ ml: "auto" }}>
            <IconButton onClick={toggleSidebar}>
              <AccessibilityNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
