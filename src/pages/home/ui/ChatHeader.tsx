import { Box, Container, List } from "@mui/material";
import { useEffect, useRef } from "react";
import { Message } from "@src/pages/home/ui/Message";

export const ChatHeader = ({ messages }) => {
  const listRef = useRef<HTMLInputElement>();

  useEffect(() => {
    listRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={{ overflowY: "auto" }}>
      <Container maxWidth="md">
        <List ref={listRef}>
          {messages.map((element, index) => (
            <Message key={index} data={element} />
          ))}
        </List>
      </Container>
    </Box>
  );
};
