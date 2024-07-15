import { User } from "./user";

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

