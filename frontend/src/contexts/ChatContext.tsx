import React, { createContext, useContext, useState } from 'react';
import { ChatContextType, Message } from '../interfaces/message'
import { ChatProviderProps } from '../interfaces/user';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string, sender: string) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID (not secure)
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  const chatContextValue: ChatContextType = {
    messages,
    sendMessage,
  };

  return <ChatContext.Provider value={chatContextValue}>{children}</ChatContext.Provider>;
};
