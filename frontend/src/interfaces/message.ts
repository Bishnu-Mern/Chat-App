export interface Message {
  id: string;
  text: string;
  sender: string; // Assuming sender is the username
  timestamp: Date;
}

export interface ChatContextType {
  messages: Message[];
  sendMessage: (text: string, sender: string) => void;
}
