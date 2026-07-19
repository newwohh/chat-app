import AppShellSideBar from "../components/AppShell";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-full">{children}</div>;
}
