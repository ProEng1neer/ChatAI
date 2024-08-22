import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "@src/app/layout/Header";
import Home from "@src/pages/home/Home";

export function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "none",
        }}
      >
        <Home />
      </Box>
    </Box>
  );
}
