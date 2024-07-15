export interface User {
  id: string;
  username: string;
  active: boolean;
  lastSeen: Date;
  profilePhotoUrl?: string;
  email?: string;
  phone?: string,
  highlighted?: boolean,
  setHighlightedUser?: (id: number) => void;
}

export interface ChatProviderProps {
    children: React.ReactNode;
}

export interface SelectedUserContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
}
