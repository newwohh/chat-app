"use client";

import {
  ChatMessageList,
  ChatMessage,
  ChatMessageBubble,
  ChatMessageMetadata,
} from "@astryxdesign/core/Chat";
import { Fragment } from "react";
import { ChatListItemType } from ".";
import { Timestamp } from "@astryxdesign/core";

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
              <ChatMessageBubble
                metadata={
                  <ChatMessageMetadata
                    timestamp={
                      <Timestamp value={msgObj.timestamp} format="time" />
                    }
                    status={msgObj?.status}
                  />
                }
              >
                {msgObj.content}
              </ChatMessageBubble>
            </ChatMessage>
          </Fragment>
        );
      })}
    </ChatMessageList>
  );
}
