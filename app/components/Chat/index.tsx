import {
  ChatComposer,
  ChatComposerDrawer,
  HStack,
  Token,
} from "@astryxdesign/core";

export default function Chat() {
  return (
    <HStack
      align="center"
      vAlign="center"
      style={{ width: "100%", maxWidth: "100%" }}
    >
      <ChatComposer
        onSubmit={(value) => {
          console.log("Sent:", value);
        }}
        drawer={
          <ChatComposerDrawer count={6}>
            <Token label="feature-prd.docx" onRemove={() => {}} />
            <Token label="2026-roadmap.pdf" onRemove={() => {}} />
            <Token label="user-flow.fig" onRemove={() => {}} />
            <Token label="launch-plan.docx" onRemove={() => {}} />
            <Token label="user-feedback.csv" onRemove={() => {}} />
            <Token label="analytics-kpis.csv" onRemove={() => {}} />
          </ChatComposerDrawer>
        }
      />
    </HStack>
  );
}
