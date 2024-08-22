import * as React from "react";
import { Chat } from "@src/pages/home/ui/Chat";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        height: "100vh",
        pt: 8,
      }}
    >
      <Chat />
    </Box>
  );
}
