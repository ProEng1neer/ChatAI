import { Message } from "@src/pages/home/ui/Message";
import Groq from "groq-sdk";
import { ROLES } from "@src/shared/types";
import { useState } from "react";
import { ChatFooter } from "@src/pages/home/ui/ChatFooter";
import { Welcome } from "@src/pages/home/ui/Welcome";
import { ChatHeader } from "@src/pages/home/ui/ChatHeader";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export interface Message {
  message: string | null;
  role: ROLES;
}

export const Chat = () => {
  const [messages, setMessage] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  function handleAskQuestion(ask = null) {
    setMessage((prev) => [...prev, { role: "user", message: ask || input }]);

    groq.chat.completions
      .create({
        messages: [
          {
            role: "user",
            content: ask || input,
          },
        ],
        model: "llama3-8b-8192",
      })
      .then((response) => {
        setMessage((prev) => [
          ...prev,
          {
            role: "assistant",
            message: response.choices[0].message.content,
          },
        ]);
      });

    setInput("");
  }

  return (
    <>
      {!messages.length ? (
        <Welcome onAskQuestion={handleAskQuestion} />
      ) : (
        <ChatHeader messages={messages} />
      )}

      <ChatFooter
        question={input}
        setQuestion={setInput}
        onAskQuestion={handleAskQuestion}
      />
    </>
  );
};
