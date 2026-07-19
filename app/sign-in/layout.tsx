import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in | Chat app",
  description: "This is the login page of the chat app currently developing by @newwohhh(gh)",
};

export default function LoginLayout({children}:{children:React.ReactNode}){
    return ( <div>{children}</div>)
}