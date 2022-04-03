import React, { FC } from "react";
import { Grid, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import links from "../../constants/links";
import { useAppContext } from "../../context/AppProvider";

const SidebarNav: FC = () => {
  const { toggleSidebar } = useAppContext();

  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <Box component="nav">
      <Grid container direction={{ xs: "column" }} spacing={{ xs: 0.5 }}>
        {links.map((link) => (
          <Grid item key={link.id}>
            <Link component={RouterLink} to={link.to} onClick={handleLinkClick}>
              <Typography color="primary.main">{link.name}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarNav;
