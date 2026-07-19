"use client";
import { useState } from "react";
import { ChatComposer } from "@astryxdesign/core/Chat";
import { Stack } from "@astryxdesign/core/Layout";
import { Text } from "@astryxdesign/core/Text";
export default function Chat() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [value, setValue] = useState(
    "Click the send button to start streaming.",
  );
  return (
    <Stack
      direction="vertical"
      gap={4}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        height: "100%",
      }}
    >
      <Stack direction="vertical" gap={1}>
        <ChatComposer
          value={value}
          onChange={setValue}
          onSubmit={(value) => {
            console.log("Sent:", value);
            alert(`Successfully sent ${value}`);
            setValue("");
            setIsStreaming(true);
            setTimeout(() => setIsStreaming(false), 5000);
          }}
          isStopShown={isStreaming}
          onStop={() => {
            console.log("Stopped");
            setIsStreaming(false);
          }}
          placeholder="Send a message to start streaming..."
        />
      </Stack>
    </Stack>
  );
}
