import { Box, Link, Typography, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { FC } from "react";
import links from "../../constants/links";

const FooterNav: FC = () => {
  return (
    <Box sx={{ py: 2 }} component="nav">
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

export default FooterNav;
