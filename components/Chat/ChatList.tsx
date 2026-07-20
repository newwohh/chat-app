"use client";

import {
  ChatMessageList,
  ChatMessage,
  ChatMessageBubble,
} from "@astryxdesign/core/Chat";
import { VStack } from "@astryxdesign/core/Layout";
import { Text } from "@astryxdesign/core/Text";
import { Avatar } from "@astryxdesign/core/Avatar";
import { Divider } from "@astryxdesign/core/Divider";
import { Fragment } from "react";
import { ChatListItemType } from ".";

const DENSITIES = ["balanced"] as const;

const AVATAR_SIZE = {
  compact: "xsmall" as const,
  balanced: "small" as const,
  spacious: "small" as const,
};

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
