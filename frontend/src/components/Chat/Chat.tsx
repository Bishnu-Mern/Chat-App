import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const Chat: React.FC = () => {
  return (
    <div className="w-[45%] h-screen flex flex-col border-r-2">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
