import React, { FC } from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10}>
            <main>{children}</main>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
