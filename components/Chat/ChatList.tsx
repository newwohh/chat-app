"use client";

import {
  ChatMessageList,
  ChatMessage,
  ChatMessageBubble,
} from "@astryxdesign/core/Chat";
import { Fragment } from "react";
import { ChatListItemType } from ".";

export default function ChatList({
  messages,
}: {
  messages: ChatListItemType[];
}) {
  return (
    <ChatMessageList density="balanced">
      {messages.map((msgObj: ChatListItemType) => {
        return (
          <Fragment key={msgObj.timestamp}>
            <ChatMessage sender={msgObj.role}>
              <ChatMessageBubble>{msgObj.content}</ChatMessageBubble>
            </ChatMessage>
          </Fragment>
        );
      })}
    </ChatMessageList>
  );
}
