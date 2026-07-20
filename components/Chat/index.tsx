"use client";
import { JSX, useState } from "react";
import { ChatComposer, ChatLayout } from "@astryxdesign/core/Chat";
import { Stack } from "@astryxdesign/core/Layout";
import ChatList from "./ChatList";

export interface ChatListItemType {
  role: "user" | "assistant";
  content: string;
  assistantName?: string;
  timestamp: string;
  id?: string;
}

export default function Chat(): JSX.Element {
  const [chatInput, setChatInput] = useState<string>("");
  const [chatList, setChatList] = useState<ChatListItemType[]>([]);

  const handleChatInput = (val: string) => {
    try {
      // set user input value
      setChatInput(val);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMessageSent = (message: string) => {
    try {
      setChatList([
        ...chatList,
        {
          role: "user",
          content: message,
          timestamp: new Date().toISOString(),
        },
      ]);
      setChatInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack direction="vertical">
      <ChatLayout
        composer={
          <ChatComposer
            value={chatInput}
            onChange={handleChatInput}
            onSubmit={handleMessageSent}
            placeholder="Send a message to start streaming..."
          />
        }
      >
        <ChatList messages={chatList} />
      </ChatLayout>
    </Stack>
  );
}
