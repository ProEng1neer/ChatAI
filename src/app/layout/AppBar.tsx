import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar/AppBar";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { drawerWidth } from "@src/app/layout/Header";
import { Avatar, Tooltip } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: theme.palette.background.default,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function AppBar({ open, toggleDrawer }) {
  return (
    <AppBarStyled position="fixed" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          ChatAI
        </Typography>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Vlad Ponomaryov">VP</Avatar>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBarStyled>
  );
}
