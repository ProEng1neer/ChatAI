import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import { mainListItems } from "@src/shared/listItems";
import * as React from "react";
import { drawerWidth } from "@src/app/layout/Header";
import { Box } from "@mui/material";

const DrawerSyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0 /*theme.spacing(7)*/,
      [theme.breakpoints.up("sm")]: {
        width: 0 /*theme.spacing(9)*/,
      },
    }),
  },
}));

export function Drawer({ open, toggleDrawer }) {
  return (
    <DrawerSyled variant="permanent" open={open}>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          height: "100vh",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <List component="nav">
          {mainListItems}
          {/*<Divider sx={{ my: 1 }} />
        {secondaryListItems}*/}
        </List>
      </Box>
    </DrawerSyled>
  );
}
