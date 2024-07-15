// src/context/SelectedUserContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SelectedUserContextType, User } from '../interfaces/user';

const SelectedUserContext = createContext<SelectedUserContextType | undefined>(undefined);

export const useSelectedUser = (): SelectedUserContextType => {
  const context = useContext(SelectedUserContext);
  if (!context) {
    throw new Error('useSelectedUser must be used within a SelectedUserProvider');
  }
  return context;
};

export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};
