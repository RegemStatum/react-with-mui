import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppContext } from "../../context/AppProvider";
import SidebarNav from "./SidebarNav";

const Sidebar: FC = () => {
  const { toggleSidebar, isSidebarOpen } = useAppContext();

  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
      <Box
        sx={{
          width: "300px",
          py: 2,
          px: 2,
          overflowX: "scroll",
          overflowY: "scroll, auto",
        }}
      >
        <Box mb={3}>
          <SidebarNav />
        </Box>
        <Button variant="contained" onClick={handleLinkClick}>
          close
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
