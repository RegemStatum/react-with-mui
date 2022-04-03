import { AppBar, Toolbar } from "@mui/material";
import React, { FC } from "react";
import FooterNav from "./FooterNav";

const Footer: FC = () => {
  return (
    <AppBar component="footer" position="static">
      <Toolbar>
        <FooterNav />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
