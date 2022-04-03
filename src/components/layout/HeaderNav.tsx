import React, { FC } from "react";
import { Grid, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import links from "../../constants/links";

const HeaderNav: FC = () => {
  return (
    <Box component="nav">
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0.5, md: 5 }}
      >
        {links.map((link) => (
          <Grid item key={link.id}>
            <Link component={RouterLink} to={link.to}>
              <Typography color="#fff">{link.name}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeaderNav;
