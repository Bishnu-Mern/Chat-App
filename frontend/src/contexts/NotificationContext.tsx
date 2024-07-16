import React, { createContext, useContext, useState, ReactNode } from "react";
import PopupNotification from "../components/PopupNotification";

type NotificationType = 'success' | 'error';

interface Notification {
    type: NotificationType;
    message: string;
  }

interface NotificationContextType {
    notification: Notification | null;
    setNotification: (notification: Notification) => void;
    clearNotification: () => void;
  }

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notification, setNotification] = useState<{
    message: string;
    type: NotificationType;
  } | null>(null);

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ notification, setNotification , clearNotification }}>
      {children}
      {notification && (
        <PopupNotification
          type={notification.type}
          message={notification.message}
        />
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
