import React, { createContext, useState, useContext } from "react";
import { AuthContextType, AuthProviderProps } from "../interfaces/auth";
import { User } from "../interfaces/user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // Simulated login logic, replace with actual authentication logic
    // For simplicity, assume login always succeeds
    const newUser: User = {
      id: "1",
      username,
      active: true,
      profilePhotoUrl: '',
      lastSeen: new Date(),
      email: `${username}@example.com`,
    };
    setUser(newUser);
  };

  const logout = () => {
    // Clear user state on logout
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user; // Return true if user exists, false otherwise
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
