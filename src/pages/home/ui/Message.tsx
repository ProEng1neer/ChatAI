import { Avatar, Box, ListItem, ListItemText, Typography } from "@mui/material";
import * as React from "react";
import Markdown from "react-markdown";

export const Message = ({ data }) => {
  const { message, role } = data;

  return (
    <ListItem>
      <ListItemText
        sx={{
          display: "flex",
          justifyContent: role === "user" ? "flex-end" : "flex-start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "top", maxWidth: "70%" }}>
          {role === "assistant" && (
            <Avatar alt="OpenAI" sx={{ width: 32, height: 32 }}>
              AI
            </Avatar>
          )}
          <Typography
            mode={"markdown"}
            sx={{
              display: "inline",
              p: 1,
              px: 2,
              borderRadius: 3,
              backgroundColor: (theme) => {
                if (role === "user") {
                  if (theme.palette.mode === "light") {
                    return theme.palette.grey[100];
                  } else {
                    return theme.palette.grey[900];
                  }
                }
              },
            }}
            component="span"
          >
            <Markdown>{message}</Markdown>
          </Typography>
        </Box>
      </ListItemText>
    </ListItem>
  );
};
