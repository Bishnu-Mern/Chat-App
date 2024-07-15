import { useChat as useChatContext } from '../contexts/ChatContext';

export const useAuth = () => {
  return useChatContext();
};
